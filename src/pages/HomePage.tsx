import * as React from "react";
import { Link, useNavigate } from '@tanstack/react-router';
import { DataTable } from "../components/ui/data-table/data-table";
import { useDataTable } from "../hooks/use-data-table";
import { getHomePageColumns } from "../constants/homePageColumns";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import { Button } from "../components/ui/button";
import { HomeFilterDrawer } from "../components/features/Home/HomeFilterDrawer";
import { LastRefreshSection } from "../components/features/LastRefreshSection";
import { KPICard } from "../components/features/Home/KPICard";
import { useHomeTableData } from "../hooks/api/use-home-data";
import { Skeleton } from "../components/ui/skeleton";

const ITEMS_PER_PAGE = 10;

export function HomePage() {
  const navigate = useNavigate();

  const { data: apiData, isLoading } = useHomeTableData();
  const tableData = apiData?.data || [];

  const onDataStoreClick = () => {
    navigate({ to: '/data-store' });
  };

  const onRefresh = (id: string) => {
    console.log('Refresh clicked for id:', id);
  };

  const columns = React.useMemo(
    () => getHomePageColumns(onDataStoreClick, onRefresh),
    [onDataStoreClick, onRefresh]
  );

  const { table } = useDataTable({
    data: tableData,
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
    <div className="h-full p-4 mt-6 bg-background ">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--brand-secondary)] font-['UnileverDesirebold']">Home Page</h1>
        <KPICard />
      </div>
      <div className="flex items-center justify-between mb-6">
        <LastRefreshSection />
        <div className="flex items-center gap-3">
          <HomeFilterDrawer />
          <Link to="/configure">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              style={{ backgroundColor: 'var(--brand-primary)', color: 'white' }}
            >
              <IconAdjustmentsHorizontal  className="h-4 w-4" stroke={2}/>
              <p className="font-normal"> Configure</p>
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <DataTable table={table} loading={isLoading}/>
      </div>
    </div>
  );
}
