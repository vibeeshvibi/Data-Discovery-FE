import * as React from "react";
import { DataTable } from "../components/ui/data-table/data-table";
import { useDataTable } from "../hooks/use-data-table";
import { sampleTableColumns, type TableColumn, getTableColumns } from "../constants/tableColumns";
import { HomeFilterDrawer } from "../components/features/Home/HomeFilterDrawer";
import { TableInfoDrawer } from "../components/features/Table/TableInfoDrawer";
import { LastRefreshSection } from "../components/features/LastRefreshSection";

const ITEMS_PER_PAGE = 10;

export function Table() {
  const onEdit = (column: TableColumn) => {
    console.log('Edit column:', column);
  };

  const columns = React.useMemo(
    () => getTableColumns(onEdit),
    [onEdit]
  );

  const { table } = useDataTable({
    data: sampleTableColumns,
    columns,
    pageCount: 1,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: ITEMS_PER_PAGE,
      },
    },
    getRowId: (row) => row.id,
  });

  return (
    <div className="h-full p-4 mt-4 bg-background">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-[var(--brand-secondary)] font-['UnileverDesirebold']">Tables</h1>
      </div>
      <div className="flex items-center justify-between mb-6">
        <LastRefreshSection />
        <div className="flex items-center gap-3">
          <HomeFilterDrawer />
          <TableInfoDrawer />
        </div>
      </div>
      <div>
        <DataTable table={table} />
      </div>
    </div>
  );
}
