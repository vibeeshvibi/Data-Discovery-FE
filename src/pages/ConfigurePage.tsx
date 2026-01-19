import * as React from "react";
import { DataTable } from "../components/ui/data-table/data-table";
import { useDataTable } from "../hooks/use-data-table";
import { sampleConfigureData } from "../constants/sampleData";
import { getConfigureColumns, flattenConfigureData, type ConfigureRow } from "../constants/configureColumns";
import { IconFilter, IconPlus } from "@tabler/icons-react";
import { Button } from "../components/ui/button";
import { LastRefreshSection } from "../components/features/LastRefreshSection";

const ITEMS_PER_PAGE = 10;

export function ConfigurePage() {
  const onToggleImport = (row: ConfigureRow) => {
    console.log('Toggle import for:', row);
  };

  const onEdit = (row: ConfigureRow) => {
    console.log('Edit row:', row);
  };

  const flattenedData = React.useMemo(
    () => flattenConfigureData(sampleConfigureData),
    []
  );

  const columns = React.useMemo(
    () => getConfigureColumns(onToggleImport, onEdit),
    [onToggleImport, onEdit]
  );

  const { table } = useDataTable({
    data: flattenedData,
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
      <style>{`
        /* Make cells in merged columns relatively positioned */
        table td:first-child,
        table td:nth-child(2),
        table td:last-child {
          position: relative;
        }
        
        /* Hide borders between grouped rows */
        table tbody tr td:first-child,
        table tbody tr td:nth-child(2),
        table tbody tr td:last-child {
          border-bottom: none !important;
        }
        
        /* Add border only after last row in group */
        table tbody tr:has(+ tr td:first-child > div) td,
        table tbody tr:last-child td {
          border-bottom: 1px solid #e5e7eb !important;
        }
      `}</style>
      
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-[var(--brand-secondary)] font-['UnileverDesirebold']">All Available RG's</h1>
      </div>
      <div className="flex items-center justify-between mb-6">
        <LastRefreshSection />
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            className="flex items-center gap-2"
            style={{ backgroundColor: '#e3effb', color: 'var(--brand-secondary)' }}
          >
            <IconFilter style={{ color: 'var(--brand-secondary)' }} stroke={3} />
            <p className="font-semibold">Filter (3)</p>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            style={{ backgroundColor: 'var(--brand-primary)', color: 'white' }}
          >
            <IconPlus className="h-4 w-4" stroke={2}/>
            <p className="font-normal">Add Manual RG</p>
          </Button>
        </div>
      </div>
      <div>
        <DataTable table={table} />
      </div>
    </div>
  );
}
