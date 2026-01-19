import type { ColumnDef } from "@tanstack/react-table";
import type { DataStore } from "./sampleData";
import { DataStoreInfoDrawer } from "../components/features/DataStore/DataStoreInfoDrawer";
import { DataStoreRowEditDrawer } from "../components/features/DataStore/DataStoreRowEditDrawer";

export const getDataStoreColumns = (
    onTableClick: (tableName: string) => void,
    onRefresh: (id: string) => void
): ColumnDef<DataStore>[] => [
        {
            accessorKey: 'name',
            header: 'Table Name',
            size: 250,
            maxSize: 250,
            minSize: 250,
            cell: ({ getValue }) => (
                <div className="flex items-center gap-2 w-full">
                    <button
                        onClick={() => onTableClick?.(getValue() as string)}
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
            accessorKey: 'description',
            header: 'Description',
            size: 200,
            maxSize: 200,
            minSize: 200,
            cell: ({ getValue }) => (
                <div className="truncate w-full" title={getValue() as string}>
                    {getValue() as string}
                </div>
            ),
        },
        {
            accessorKey: 'sourceTable',
            header: 'Source Table',
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
            accessorKey: 'createdBy',
            header: 'Created By',
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
            header: 'Created At',
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
            accessorKey: 'tableCount',
            header: 'Columns',
            size: 100,
            maxSize: 100,
            minSize: 100,
            cell: ({ getValue }) => (
                <div className="text-center w-full">
                    {getValue() as string}
                </div>
            ),
        },
        {
            accessorKey: 'rowCount',
            header: 'Rows',
            size: 100,
            maxSize: 100,
            minSize: 100,
            cell: ({ getValue }) => (
                <div className="text-center w-full">
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
                <div className="flex gap-2 justify-center w-full">
                    <DataStoreInfoDrawer dataStore={row.original} />
                    <DataStoreRowEditDrawer dataStore={row.original} />
                </div>
            ),
        },
    ];
