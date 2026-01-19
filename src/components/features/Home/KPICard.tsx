import { IconDatabase, IconServer, IconTable, IconChartBar } from "@tabler/icons-react";
import { useKPIData } from "../../../hooks/api/use-kpi-data";
import { Skeleton } from "../../ui/skeleton";

export function KPICard() {
  const { data: kpiData, isLoading } = useKPIData();

  const safeData = kpiData || {
    resourceGroups: 0,
    servers: 0,
    dataStores: 0,
    tablesOrFiles: 0,
    measures: 0
  };

  const renderValue = (value: number) => {
    if (isLoading) {
      return <Skeleton className="w-6 ml-1 h-5 inline-block bg-gray-200" />;
    }
    return ` ${value} `;
  };

  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="bg-[#e3effb] p-1 rounded-sm">
          <IconDatabase color="var(--brand-primary)" stroke={2} size={22} />
        </div>
        <span className="text-sm font-smal text-gray-500">Resource Group:
          <span className="text-black font-semibold">{renderValue(safeData.resourceGroups)}</span></span>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-[#e8eaf6] p-1 rounded">
          <IconServer color="#8c93ff" stroke={2} size={22} />
        </div>
        <span className="text-sm font-smal text-gray-500">Server:
          <span className="text-black font-semibold">{renderValue(safeData.servers)}</span></span>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-[#ede7f6] p-1 rounded">
          <IconDatabase color="#b388ff" stroke={2} size={22} />
        </div>
        <span className="text-sm font-smal text-gray-500">Data Store:
          <span className="text-black font-semibold">{renderValue(safeData.dataStores)}</span></span>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-[#e1f5fe] p-1 rounded">
          <IconTable color="#40c4ff" stroke={2} size={22} />
        </div>
        <span className="text-sm font-smal text-gray-500">Tables:
          <span className="text-black font-semibold">{renderValue(safeData.tablesOrFiles)}</span></span>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-[#e0f7fa] p-1 rounded">
          <IconChartBar color="#00acc1" stroke={2} size={22} />
        </div>
        <span className="text-sm font-smal text-gray-500">Measures:
          <span className="text-black font-semibold">{renderValue(safeData.measures)}</span></span>
      </div>
    </div>
  );
}
