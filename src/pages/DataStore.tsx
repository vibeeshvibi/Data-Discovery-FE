import * as React from "react";
import { useNavigate } from '@tanstack/react-router';
import { DataTable } from "../components/ui/data-table/data-table";
import { useDataTable } from "../hooks/use-data-table";
import { sampleDataStores, type DataStore } from "../constants/sampleData";
import { getDataStoreColumns } from "../constants/dataStoreColumns";
import { HomeFilterDrawer } from "../components/features/Home/HomeFilterDrawer";
import { DataStoreInfoDrawer } from "../components/features/DataStore/DataStoreInfoDrawer";
import { LastRefreshSection } from "../components/features/LastRefreshSection";

const ITEMS_PER_PAGE = 10;

export function DataStore() {
  const navigate = useNavigate();

  const onTableClick = () => {
    navigate({ to: '/data-store/table' });
  };

  const onRefresh = (id: string) => {
    console.log('Refresh clicked for id:', id);
  };

  const columns = React.useMemo(
    () => getDataStoreColumns(onTableClick, onRefresh),
    [onTableClick, onRefresh]
  );

  const { table } = useDataTable({
    data: sampleDataStores,
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
        <h1 className="text-2xl font-bold text-[var(--brand-secondary)] font-['UnileverDesirebold']">Marketing_001_SQL_DB_transcation</h1>
      </div>
      <div className="flex items-center justify-between mb-6">
        <LastRefreshSection />
        <div className="flex items-center gap-3">
          <HomeFilterDrawer />
          <DataStoreInfoDrawer />
        </div>
      </div>
      <div >
        <DataTable table={table} />
      </div>
    </div>
  );
}
