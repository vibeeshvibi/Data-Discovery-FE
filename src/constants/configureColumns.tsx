import type { ColumnDef } from "@tanstack/react-table";
import { IconPencil } from "@tabler/icons-react";

export interface ConfigureRow {
  id: string
  type: string
  resourceGroup: string
  dataStoreType: string
  dataStoreName: string
  importEnabled: boolean
  isFirstInGroup: boolean
  groupSize: number
}

export const getConfigureColumns = (
  onToggleImport: (row: ConfigureRow) => void,
  onEdit: (row: ConfigureRow) => void
): ColumnDef<ConfigureRow>[] => [
  {
    accessorKey: 'type',
    header: 'Type',
    size: 80,
    maxSize: 80,
    minSize: 80,
    cell: ({ getValue, row }) => {
      if (!row.original.isFirstInGroup) {
        return <div style={{ height: '100%' }} />;
      }
      return (
        <div 
          className={'flex p-2 items-center justify-center bg-white border-r'}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: `calc(-100% * ${row.original.groupSize - 1})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}
        >
          {getValue() as string}
        </div>
      );
    },
  },
  {
    accessorKey: 'resourceGroup',
    header: 'Resource Group',
    size: 120,
    maxSize: 120,
    minSize: 120,
    cell: ({ getValue, row }) => {
      if (!row.original.isFirstInGroup) {
        return <div style={{ height: '100%' }} />;
      }
      return (
        <div 
          className="font-medium bg-white border-r" 
          title={getValue() as string}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: `calc(-100% * ${row.original.groupSize - 1})`,
            display: 'flex',
            alignItems: 'center',
           justifyContent: 'center',
            zIndex: 1
          }}
        >
          {getValue() as string}
        </div>
      );
    },
  },
  {
    accessorKey: 'dataStoreType',
    header: 'Data Store Type',
    size: 150,
    maxSize: 150,
    minSize: 150,
    cell: ({ getValue }) => (
      <div className="truncate w-full" title={getValue() as string}>
        {getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: 'dataStoreName',
    header: 'Data Store Name',
    size: 180,
    maxSize: 180,
    minSize: 180,
    cell: ({ getValue }) => (
      <div className="truncate w-full" title={getValue() as string}>
        {getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: 'importEnabled',
    header: 'Import',
    size: 100,
    maxSize: 100,
    minSize: 100,
    cell: ({ getValue, row }) => (
      <div className="flex justify-center w-full">
        <button
          onClick={() => onToggleImport?.(row.original)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            getValue() ? 'bg-[var(--brand-primary)]' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              getValue() ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    ),
  },
  {
    id: 'actions',
    header: 'Edit',
    size: 80,
    maxSize: 80,
    minSize: 80,
    cell: ({ row }) => {
      if (!row.original.isFirstInGroup) {
        return <div style={{ height: '100%' }} />;
      }
      return (
        <div 
          className="flex justify-center border-l bg-white"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: `calc(-100% * ${row.original.groupSize - 1})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}
        >
          <button
            onClick={() => onEdit?.(row.original)}
            className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity"
            aria-label={`Edit ${row.original.resourceGroup}`}
          >
            <IconPencil className="w-full h-full" color="#0b6bcb"/>
          </button>
        </div>
      );
    },
  },
];

// Helper function to flatten the configure data with grouping info
export const flattenConfigureData = (data: any[]): ConfigureRow[] => {
  const flattened: ConfigureRow[] = [];

  data.forEach((item) => {
    const groupSize = item.dataStore.length;
    
    item.dataStore.forEach((ds: any, index: number) => {
      flattened.push({
        id: `${item.id}-${index}`,
        type: item.type,
        resourceGroup: item.resourceGroup,
        dataStoreType: ds.dataStoreType,
        dataStoreName: ds.dataStoreName,
        importEnabled: ds.importEnabled,
        isFirstInGroup: index === 0,
        groupSize: groupSize,
      });
    });
  });

  return flattened;
};
