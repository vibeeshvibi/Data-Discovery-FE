import {Position} from '@xyflow/react';
import type { Edge} from '@xyflow/react';

interface TreeNodeData extends Record<string, unknown> {
  label: string;
  isCollapsed?: boolean;
  hasChildren?: boolean;
}

interface TreeEdgeData extends Record<string, unknown> {
  label?: string;
}


export const initialNodesData = [
  {
    id: 'root',
    type: 'default',
    position: { x: 0, y: 0 },
    data: { label: 'HeadcountHRStandardPack', hasChildren: true } as TreeNodeData,
    sourcePosition: Position.Right,
  },

  {
    id: 'bdl_processed_hr_qa',
    type: 'default',
    position: { x: 250, y: -200 },
    data: { label: 'bdl_processed_hr_qa.hr.rewardemployeegroup', hasChildren: true } as TreeNodeData,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'pds_hr_people_904394_dev',
    type: 'default',
    position: { x: 250, y: 200 },
    data: { label: 'pds_hr_people_904394_dev.hr_reward.rewardemployeegroup_final', hasChildren: true } as TreeNodeData,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },

  {
    id: 'hr_schema',
    type: 'default',
    position: { x: 500, y: -300 },
    data: { label: 'bdl_processed_hr_qa.hr.employeestagephase2', hasChildren: true } as TreeNodeData,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'staging_schema',
    type: 'default',
    position: { x: 500, y: -100 },
    data: { label: 'bdl_processed_hr_qa.staging.bdllandingphase3table', hasChildren: true } as TreeNodeData,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'common_schema',
    type: 'default',
    position: { x: 500, y: 100 },
    data: { label: 'bdl_processed_hr_qa.common.factempltrans', hasChildren: true } as TreeNodeData,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },

  {
    id: 'standard_pack_schema',
    type: 'default',
    position: { x: 500, y: 100 },
    data: { label: 'pds_hr_people_904394_dev.standard_pack.exclusiongroupmapping_final', hasChildren: true } as TreeNodeData,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'hr_online_schema',
    type: 'default',
    position: { x: 500, y: 300 },
    data: { label: 'pds_hr_people_904394_dev.hr_online.functionhierarchy_final', hasChildren: true } as TreeNodeData,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },

  {
    id: 'positiondata',
    type: 'default',
    position: { x: 750, y: -400 },
    data: { label: 'bdl_processed_hr_qa.hr.positiondata', hasChildren: true } as TreeNodeData,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'employeestagephase2',
    type: 'default',
    position: { x: 750, y: -200 },
    data: { label: 'bdl_processed_hr_qa.hr.employeestagephase2', hasChildren: true } as TreeNodeData,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'employeestage',
    type: 'default',
    position: { x: 750, y: 0 },
    data: { label: 'bdl_processed_hr_qa.hr.employeestage', hasChildren: true } as TreeNodeData,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'hrasnapupdatedelta',
    type: 'default',
    position: { x: 750, y: 200 },
    data: { label: 'bdl_processed_hr_qa.hr.hrasnapdatedelta' } as TreeNodeData,
    targetPosition: Position.Left,
  },
   
  {
    id: 'positiondata_stage',
    type: 'default',
    position: { x: 750, y: -100 },
    data: { label: 'bdl_processed_hr_qa.staging.positiondata_stage' } as TreeNodeData,
    targetPosition: Position.Left,
  },
  {
    id: 'bdllandingphase3table',
    type: 'default',
    position: { x: 750, y: 100 },
    data: { label: 'bdl_processed_hr_qa.staging.bdllandingphase3table' } as TreeNodeData,
    targetPosition: Position.Left,
  },
  {
    id: 'bdllandingphase2table',
    type: 'default',
    position: { x: 750, y: 300 },
    data: { label: 'bdl_processed_hr_qa.staging.bdllandingphase2table' } as TreeNodeData,
    targetPosition: Position.Left,
  },
  {
    id: 'bdllandingphase1table',
    type: 'default',
    position: { x: 750, y: 400 },
    data: { label: 'bdl_processed_hr_qa.staging.bdllandingphase1table' } as TreeNodeData,
    targetPosition: Position.Left,
  },

  {
    id: 'organizationunit',
    type: 'default',
    position: { x: 750, y: 500 },
    data: { label: 'bdl_processed_hr_qa.common.organizationunit' } as TreeNodeData,
    targetPosition: Position.Left,
  },
  {
    id: 'function',
    type: 'default',
    position: { x: 750, y: 600 },
    data: { label: 'bdl_processed_hr_qa.common.function' } as TreeNodeData,
    targetPosition: Position.Left,
  },
  {
    id: 'geography',
    type: 'default',
    position: { x: 750, y: 700 },
    data: { label: 'bdl_processed_hr_qa.common.geography' } as TreeNodeData,
    targetPosition: Position.Left,
  },
  {
    id: 'empexclusiongroup',
    type: 'default',
    position: { x: 750, y: 800 },
    data: { label: 'bdl_processed_hr_qa.common.empexclusiongroup' } as TreeNodeData,
    targetPosition: Position.Left,
  },
  {
    id: 'assignment',
    type: 'default',
    position: { x: 750, y: 900 },
    data: { label: 'bdl_processed_hr_qa.common.assignment' } as TreeNodeData,
    targetPosition: Position.Left,
  },

  {
    id: 'exclusiongroupmapping_final',
    type: 'default',
    position: { x: 750, y: 100 },
    data: { label: 'pds_hr_people_904394_dev.standard_pack.exclusiongroupmapping_final' } as TreeNodeData,
    targetPosition: Position.Left,
  },
  {
    id: 'functionhierarchy_final',
    type: 'default',
    position: { x: 750, y: 300 },
    data: { label: 'pds_hr_people_904394_dev.hr_online.functionhierarchy_final', hasChildren: true } as TreeNodeData,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'organizationunitehierarchy_final',
    type: 'default',
    position: { x: 750, y: 500 },
    data: { label: 'sl_bdl_processed_hr_qa.common.vw_function', hasChildren: true } as TreeNodeData,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },

  {
    id: 'vw_function',
    type: 'default',
    position: { x: 1000, y: 200 },
    data: { label: 'sl_bdl_processed_hr_qa.hr.vw_rewardemployeegroup' } as TreeNodeData,
    targetPosition: Position.Left,
  },
  {
    id: 'vw_organizationunit',
    type: 'default',
    position: { x: 1000, y: 400 },
    data: { label: 'sl_bdl_processed_hr_qa.common.vw_function' } as TreeNodeData,
    targetPosition: Position.Left,
  },
];


export const initialEdgesData: Edge<TreeEdgeData>[] = [
  // Root to main schemas
  {
    id: 'root-to-bdl',
    source: 'root',
    target: 'bdl_processed_hr_qa',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'root-to-pds',
    source: 'root',
    target: 'pds_hr_people_904394_dev',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },

  {
    id: 'bdl-to-hr',
    source: 'bdl_processed_hr_qa',
    target: 'hr_schema',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'bdl-to-staging',
    source: 'bdl_processed_hr_qa',
    target: 'staging_schema',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'bdl-to-common',
    source: 'bdl_processed_hr_qa',
    target: 'common_schema',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },

  // PDS schema to its sub-schemas
  {
    id: 'pds-to-standard',
    source: 'pds_hr_people_904394_dev',
    target: 'standard_pack_schema',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'pds-to-hr-online',
    source: 'pds_hr_people_904394_dev',
    target: 'hr_online_schema',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },

  // HR schema tables
  {
    id: 'hr-to-positiondata',
    source: 'hr_schema',
    target: 'positiondata',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'hr-to-employeestagephase2',
    source: 'hr_schema',
    target: 'employeestagephase2',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'hr-to-employeestage',
    source: 'hr_schema',
    target: 'employeestage',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'hr-to-hrasnapupdatedelta',
    source: 'hr_schema',
    target: 'hrasnapupdatedelta',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },

  // Staging schema tables
  {
    id: 'staging-to-positiondata-stage',
    source: 'staging_schema',
    target: 'positiondata_stage',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'staging-to-bdllandingphase3table',
    source: 'staging_schema',
    target: 'bdllandingphase3table',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'staging-to-bdllandingphase2table',
    source: 'staging_schema',
    target: 'bdllandingphase2table',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'staging-to-bdllandingphase1table',
    source: 'staging_schema',
    target: 'bdllandingphase1table',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },

  // Common schema tables
  {
    id: 'common-to-organizationunit',
    source: 'common_schema',
    target: 'organizationunit',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'common-to-function',
    source: 'common_schema',
    target: 'function',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'common-to-geography',
    source: 'common_schema',
    target: 'geography',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'common-to-empexclusiongroup',
    source: 'common_schema',
    target: 'empexclusiongroup',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'common-to-assignment',
    source: 'common_schema',
    target: 'assignment',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },

  // PDS tables
  {
    id: 'standard-to-exclusiongroupmapping',
    source: 'standard_pack_schema',
    target: 'exclusiongroupmapping_final',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'hr-online-to-functionhierarchy',
    source: 'hr_online_schema',
    target: 'functionhierarchy_final',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'hr-online-to-organizationhierarchy',
    source: 'hr_online_schema',
    target: 'organizationunitehierarchy_final',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },

  // Views
  {
    id: 'functionhierarchy-to-vw-function',
    source: 'functionhierarchy_final',
    target: 'vw_function',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'organizationhierarchy-to-vw-organizationunit',
    source: 'organizationunitehierarchy_final',
    target: 'vw_organizationunit',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },

  // Cross-schema relationships (multiple parents)
  {
    id: 'positiondata-to-positiondata-stage',
    source: 'positiondata',
    target: 'positiondata_stage',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'employeestage-to-function',
    source: 'employeestage',
    target: 'function',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
  {
    id: 'employeestagephase2-to-employeestage',
    source: 'employeestagephase2',
    target: 'employeestage',
    type: 'default',
    markerEnd: { type: 'arrowclosed' },
  },
];