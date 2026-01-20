import { useCallback, useMemo, useState } from 'react';
import {
    ReactFlow as BaseReactFlow,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
    MiniMap,
    Background,
    BackgroundVariant,
    Handle,
    Position,
    NodeToolbar,
} from '@xyflow/react';
import type { Node, Connection } from '@xyflow/react';
import {
    IconChevronRight,
    IconChevronDown,
} from '@tabler/icons-react';
import '@xyflow/react/dist/style.css';
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
                className="flex items-center justify-center relative rounded-lg border-2 min-h-9"
                onClick={() => data.onNodeClick && data.onNodeClick()}
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
                {data.hasChildren && (
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            data.onToggle();
                        }}
                        className="cursor-pointer p-2 rounded-md hover:bg-white/20 transition-all flex items-center justify-center shrink-0"
                    >
                        {data.isCollapsed ? (
                            <IconChevronRight size={16} stroke={3} />
                        ) : (
                            <IconChevronDown size={16} stroke={3} />
                        )}
                    </div>
                )}
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

const edgeTypes = {};

export function ReactFlowComponent() {
    // Build children map for collapse functionality
    const childrenMap = useMemo(() => {
        const map: Record<string, string[]> = {};
        initialEdgesData.forEach(edge => {
            if (!map[edge.source]) map[edge.source] = [];
            map[edge.source].push(edge.target);
        });
        return map;
    }, []);

    // Build parent map for path highlighting
    const parentMap = useMemo(() => {
       const map: Record<string, string[]> = {};

  initialEdgesData.forEach(edge => {
    if (!map[edge.target]) {
      map[edge.target] = [];
    }
    map[edge.target].push(edge.source);
  });

  return map;
    }, []);

    const [nodes, , onNodesChange] = useNodesState(initialNodesData);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdgesData);
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

    // Initialize collapsedNodes with nodes at level 3 that have children
    const [collapsedNodes, setCollapsedNodes] = useState<Set<string>>(() => {
        const collapsed = new Set<string>();

        // Find roots (nodes with no incoming edges in initialEdgesData)
        const targetNodes = new Set(initialEdgesData.map(e => e.target));
        const roots = initialNodesData.filter(n => !targetNodes.has(n.id));

        const queue: { id: string, level: number }[] = roots.map(r => ({ id: r.id, level: 1 }));

        while (queue.length > 0) {
            const { id, level } = queue.shift()!;

            if (level === 3) {
                const children = childrenMap[id] || [];
                if (children.length > 0) {
                    collapsed.add(id);
                }
                continue;
            }

            const children = childrenMap[id] || [];
            children.forEach(childId => {
                queue.push({ id: childId, level: level + 1 });
            });
        }

        return collapsed;
    });

    // Get path from root to a given node
    const getPathToRoot = useCallback(  (nodeId: string, visited = new Set<string>()): string[][] => {
    // Prevent infinite loops (cycle safety)
    if (visited.has(nodeId)) return [];

    const newVisited = new Set(visited);
    newVisited.add(nodeId);

    const parents = parentMap[nodeId];

    // Root node (no parents)
    if (!parents || parents.length === 0) {
      return [[nodeId]];
    }

    // Collect all paths from all parents
    const paths: string[][] = [];

    parents.forEach(parentId => {
      const parentPaths = getPathToRoot(parentId, newVisited);
      parentPaths.forEach(path => {
        paths.push([...path, nodeId]);
      });
    });

    return paths;
  },
  [parentMap]);

    // Get highlighted nodes and edges
  const highlightedPath = useMemo(() => {
  if (!selectedNodeId) {
    return { nodes: new Set<string>(), edges: new Set<string>() };
  }

  const allPaths = getPathToRoot(selectedNodeId);

  const nodesSet = new Set<string>();
  const edgesSet = new Set<string>();

  allPaths.forEach(path => {
    path.forEach(nodeId => nodesSet.add(nodeId));

    for (let i = 0; i < path.length - 1; i++) {
      const source = path[i];
      const target = path[i + 1];
      edgesSet.add(`${source}-${target}`);
    }
  });

  return { nodes: nodesSet, edges: edgesSet };
}, [selectedNodeId, getPathToRoot]);


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

    const toggleNode = useCallback((nodeId: string) => {
        setCollapsedNodes(prev => {
            const newSet = new Set(prev);
            if (newSet.has(nodeId)) {
                newSet.delete(nodeId);
            } else {
                newSet.add(nodeId);
            }
            return newSet;
        });
    }, []);

    // Handle node click
    const handleNodeClick = useCallback((nodeId: string) => {
        setSelectedNodeId(prev => prev === nodeId ? null : nodeId);
    }, []);

    // Handle connections (for future extensibility)
    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    // Custom node styling based on collapse state and highlight
    const getNodeStyle = useCallback((node: Node) => {
        const isCollapsed = collapsedNodes.has(node.id);
        const isHighlighted = highlightedPath.nodes.has(node.id);
        const shouldDull = selectedNodeId !== null && !isHighlighted;

        let background = 'var(--brand-primary)';
        
        if (isCollapsed) {
            background = '#ff9800';
        }

        return {
            background,
            color: 'white',
            border: '2px solid #fff',
            borderRadius: '8px',
            padding: '0px',
            fontSize: '14px',
            fontWeight: 'bold',
            minWidth: '200px',
            textAlign: 'center' as const,
            cursor: 'pointer',
            opacity: shouldDull ? 0.3 : 1,
            transition: 'opacity 0.2s ease',
        };
    }, [collapsedNodes, highlightedPath.nodes, selectedNodeId]);

    // Custom node label
    const getNodeLabel = useCallback((node: Node) => {
        return node.data.label;
    }, []);

    // Custom edge styling for highlighted path
    const styledEdges = useMemo(() => {
        return visibleEdges.map(edge => {
            const edgeId = `${edge.source}-${edge.target}`;
            const isHighlighted = highlightedPath.edges.has(edgeId);
            const shouldDull = selectedNodeId !== null && !isHighlighted;

            return {
                ...edge,
                style: {
                    stroke: '#b1b1b7',
                    strokeWidth: 2,
                    opacity: shouldDull ? 0.2 : 1,
                    transition: 'opacity 0.2s ease',
                },
            };
        });
    }, [visibleEdges, highlightedPath.edges, selectedNodeId]);

    return (
        <BaseReactFlow
            style={{ height: '100%', width: '100%' }}
            nodes={(visibleNodes.map(node => ({
                ...node,
                type: 'custom',
                data: {
                    ...node.data,
                    fullLabel: (node.data as any).label,
                    label: getNodeLabel(node),
                    style: getNodeStyle(node),
                    sourcePosition: node.sourcePosition,
                    targetPosition: node.targetPosition,
                    hasChildren: childrenMap[node.id]?.length > 0,
                    isCollapsed: collapsedNodes.has(node.id),
                    onToggle: () => toggleNode(node.id),
                    onNodeClick: () => handleNodeClick(node.id),
                },
                style: {}, // Clear top-level style to avoid double styling
            })) as any[])}
            edges={styledEdges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            nodesDraggable={false}
            fitView
            attributionPosition="bottom-left"
        >
            <Controls />
            <MiniMap
                nodeColor={(node) => {
                    const isCollapsed = collapsedNodes.has(node.id);
                    return isCollapsed ? '#ff9800' : "var(--brand-primary)";
                }}
            />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </BaseReactFlow>
    );
}