import type { ColumnDef } from "@tanstack/react-table";
import { IconRefresh} from "@tabler/icons-react";
import { Badge } from "../components/ui/badge";
import type { DataStore } from "./sampleData";

export const getHomePageColumns = (
  onDataStoreClick: (dataStore: DataStore) => void,
  onRefresh: (id: string) => void
): ColumnDef<DataStore>[] => [
  {
    accessorKey: 'type',
    header: 'Type',
    size: 80,
    maxSize: 80,
    minSize: 80,
    cell: ({ getValue }) => (
      <div className="flex items-center justify-center w-full">
        <Badge  className={getValue() === 'RG' ? 'bg-blue-50 text-gray-600 border-blue-200' : 'bg-orange-50 text-orange-600 border-orange-200'}>
          {getValue() as string}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: 'application',
    header: 'Application',
    size: 120,
    maxSize: 120,
    minSize: 120,
    cell: ({ getValue }) => (
      <div className="truncate w-full" title={getValue() as string}>
        {getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: 'resourceGroup',
    header: 'RG/PBI',
    size: 140,
    maxSize: 140,
    minSize: 140,
    cell: ({ getValue }) => (
      <div className="truncate w-full" title={getValue() as string}>
        {getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: 'dataStoreType',
    header: 'Data Store Type',
    size: 140,
    maxSize: 140,
    minSize: 140,
    cell: ({ getValue }) => (
      <div className="flex items-center justify-center w-full">
        <Badge variant="default" className="text-[#171a1c] bg-gray-200">
          {getValue() as string}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: 'dataOwner',
    header: 'Data Owner',
    size: 120,
    maxSize: 120,
    minSize: 120,
    cell: ({ getValue }) => (
      <div className="truncate w-full" title={getValue() as string}>
        {getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Data Store Name',
    size: 200,
    maxSize: 200,
    minSize: 200,
    cell: ({ getValue, row }) => (
      <div className="flex items-center gap-2 w-full">
        <button
          onClick={() => onDataStoreClick?.(row.original)}
          className="text-unilever cursor-pointer font-unilever line-5 overflow-hidden text-ellipsis whitespace-nowrap flex-1 text-left"
          title={getValue() as string}
        >
          <p className='text-[#0066CC] underline text-sm truncate'>
            {getValue() as string}
          </p>
        </button>
      </div>
    ),
  },
  {
    accessorKey: 'tableCount',
    header: 'Tables',
    size: 80,
    maxSize: 80,
    minSize: 80,
    cell: ({ getValue }) => (
      <div className="text-center w-full">
        {getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: 'createdBy',
    header: 'Created by',
    size: 120,
    maxSize: 120,
    minSize: 120,
    cell: ({ getValue }) => (
      <div className="truncate w-full" title={getValue() as string}>
        {getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Created at',
    size: 120,
    maxSize: 120,
    minSize: 120,
    cell: ({ getValue }) => (
      <div className="truncate w-full" title={getValue() as string}>
        {getValue() as string}
      </div>
    ),
  },
  {
    id: 'actions',
    header: 'Action',
    size: 80,
    maxSize: 80,
    minSize: 80,
    cell: ({ row }) => (
      <div className="flex justify-center w-full">
        <button
          onClick={() => onRefresh?.(row.original.id)}
          className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label={`Refresh ${row.original.name}`}
        >
          <IconRefresh className="w-full h-full" color="var(--brand-primary)"/>
        </button>
      </div>
    ),
  },
];
