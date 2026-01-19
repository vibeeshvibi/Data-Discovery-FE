import React, { useCallback, useMemo, useState } from 'react';
import {
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
} from '@xyflow/react';
import type { Node, Connection } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Handle, Position, NodeToolbar } from '@xyflow/react';
import { LastRefreshSection } from '@/components/features/LastRefreshSection';
import { LineageFilter } from '@/components/features/LineageFilter';
import { initialNodesData, initialEdgesData } from '@/constants/lineageData';

const CustomNode = ({ data }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <NodeToolbar
        isVisible={isHovered}
        position={Position.Top}
        className="bg-slate-900 text-white p-1 px-2 rounded shadow-lg border border-slate-700 min-w-max text-[11px] pointer-events-none mb-1"
      >
        <div className="flex flex-col gap-0.5">
          <div className="break-all italic">{data.fullLabel || data.label}</div>
        </div>
      </NodeToolbar>

      <div
        style={data.style}
        className="flex items-center justify-center relative rounded-lg shadow-md hover:brightness-110 transition-all duration-200 border-2 border-white/50"
      >
        {data.targetPosition && (
          <Handle
            type="target"
            position={data.targetPosition as Position}
            className="!bg-white w-2 h-2 border border-blue-400"
          />
        )}
        <div className="truncate px-2 w-[180px] text-center">
          {data.label}
        </div>
        {data.sourcePosition && (
          <Handle
            type="source"
            position={data.sourcePosition as Position}
            className="!bg-white w-2 h-2 border border-blue-400"
          />
        )}
      </div>
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

// Edge types configuration
const edgeTypes = {};

export function Lineage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodesData);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdgesData);
  const [collapsedNodes, setCollapsedNodes] = useState<Set<string>>(new Set());

  // Build children map for collapse functionality
  const childrenMap = useMemo(() => {
    const map: Record<string, string[]> = {};
    initialEdgesData.forEach(edge => {
      if (!map[edge.source]) map[edge.source] = [];
      map[edge.source].push(edge.target);
    });
    return map;
  }, []);

  // Get all descendant nodes for a given node
  const getDescendants = useCallback((nodeId: string): string[] => {
    const descendants: string[] = [];
    const children = childrenMap[nodeId] || [];

    children.forEach(child => {
      descendants.push(child);
      descendants.push(...getDescendants(child));
    });

    return descendants;
  }, [childrenMap]);

  // Filter nodes and edges based on collapsed state
  const visibleNodes = useMemo(() => {
    const hiddenNodes = new Set<string>();

    collapsedNodes.forEach(nodeId => {
      const descendants = getDescendants(nodeId);
      descendants.forEach(desc => hiddenNodes.add(desc));
    });

    return nodes.filter(node => !hiddenNodes.has(node.id));
  }, [nodes, collapsedNodes, getDescendants]);

  const visibleEdges = useMemo(() => {
    return edges.filter(edge =>
      visibleNodes.some(node => node.id === edge.source) &&
      visibleNodes.some(node => node.id === edge.target)
    );
  }, [edges, visibleNodes]);

  // Handle node click for collapse/expand
  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    const hasChildren = childrenMap[node.id]?.length > 0;
    if (hasChildren) {
      setCollapsedNodes(prev => {
        const newSet = new Set(prev);
        if (newSet.has(node.id)) {
          newSet.delete(node.id);
        } else {
          newSet.add(node.id);
        }
        return newSet;
      });
    }
  }, [childrenMap]);

  // Handle connections (for future extensibility)
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Custom node styling based on collapse state
  const getNodeStyle = useCallback((node: Node) => {
    const hasChildren = childrenMap[node.id]?.length > 0;
    const isCollapsed = collapsedNodes.has(node.id);

    return {
      background: isCollapsed ? '#ff9800' : 'var(--brand-primary)',
      color: 'white',
      border: '2px solid #fff',
      borderRadius: '8px',
      padding: '10px',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: hasChildren ? 'pointer' : 'default',
      minWidth: '120px',
      textAlign: 'center' as const,
    };
  }, [childrenMap, collapsedNodes]);

  // Custom node label with collapse indicator
  const getNodeLabel = useCallback((node: Node) => {
    const hasChildren = childrenMap[node.id]?.length > 0;
    const isCollapsed = collapsedNodes.has(node.id);
    const arrow = hasChildren ? (isCollapsed ? ' ▶' : ' ▼') : '';

    return `${node.data.label}${arrow}`;
  }, [childrenMap, collapsedNodes]);


  return (
    <div className="h-full p-4 mt-8 bg-background">
      <div className="mb-6 flex gap-[6rem] items-start">
        <div>
          <h1 className="text-2xl font-bold text-[var(--brand-secondary)] font-['UnileverDesirebold']">Lineage</h1>
          <div className='pt-2'>
            <LastRefreshSection />
          </div>
        </div>
        <LineageFilter />
      </div>
      <div className="h-[550px] w-full border border-border/50 rounded-xl ">
        <ReactFlow
          nodes={visibleNodes.map(node => ({
            ...node,
            type: 'custom',
            data: {
              ...node.data,
              fullLabel: node.data.label,
              label: getNodeLabel(node),
              style: getNodeStyle(node),
              sourcePosition: node.sourcePosition,
              targetPosition: node.targetPosition,
            },
            style: {}, // Clear top-level style to avoid double styling
          }))}
          edges={visibleEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          nodesDraggable={false}
          fitView
          attributionPosition="bottom-left"
        >
          <Controls />
          <MiniMap
            nodeColor={(node) => {
              const hasChildren = childrenMap[node.id]?.length > 0;
              const isCollapsed = collapsedNodes.has(node.id);
              return isCollapsed ? '#ff9800' : "var(--brand-primary)";
            }}
          />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
}
