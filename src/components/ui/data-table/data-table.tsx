import { flexRender, type Table as TanstackTable } from "@tanstack/react-table";
import type * as React from "react";

import { DataTablePagination } from "@/components/ui/data-table/data-table-pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCommonPinningStyles } from "@/lib/data-table";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface DataTableProps<TData> extends React.ComponentProps<"div"> {
  table: TanstackTable<TData>;
  actionBar?: React.ReactNode;
  loading?: boolean;
}

export function DataTable<TData>({
  table,
  actionBar,
  loading = false,
  children,
  className,
  ...props
}: DataTableProps<TData>) {
  // Generate skeleton rows for loading state
  const skeletonRows = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div
      className={cn("flex w-full flex-col gap-2.5 overflow-auto", className)}
      {...props}
    >
      {children}
      <div className="overflow-hidden rounded-sm border !bg-white">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
               <TableHead
               key={header.id}
               colSpan={header.colSpan}
               style={{
                 ...getCommonPinningStyles({ column: header.column }),
                 backgroundColor: "white"
               }}
               className="relative last:before:hidden before:absolute before:right-0 before:top-2 before:bottom-2 before:w-px before:bg-border"
             >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody style={{ fontSize:".85rem", backgroundColor:"white"}} className="text-gray-600">
            {loading ? (
              // Show skeleton rows when loading
              skeletonRows.map((_, index) => (
                <TableRow key={`skeleton-${index}`}>
                  {table.getAllColumns().map((column, cellIndex) => (
                    <TableCell
                      key={`skeleton-cell-${cellIndex}`}
                      style={{
                        ...getCommonPinningStyles({ column }),
                        backgroundColor: "white"
                      }}
                    >
                      <Skeleton className="h-4 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      style={{
                        ...getCommonPinningStyles({ column: cell.column }), backgroundColor:"white"
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col gap-2.5">
        <DataTablePagination table={table} />
        {actionBar &&
          table.getFilteredSelectedRowModel().rows.length > 0 &&
          actionBar}
      </div>
    </div>
  );
}
