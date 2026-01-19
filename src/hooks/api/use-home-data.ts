import { useQuery } from '@tanstack/react-query';
import { homeAPI } from '../../api/services/home';
import { queryKeys } from '../../api/query-client';

// Hook for table data
export const useHomeTableData = (filters?: Record<string, any>) => {
  return useQuery({
    queryKey: ['home', 'table', filters],
    queryFn: () => homeAPI.getTableData(filters),
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook for all home data (KPI + Table)
export const useHomeData = (filters?: Record<string, any>) => {
  return useQuery({
    queryKey: ['home', 'all', filters],
    queryFn: async () => {
      const [kpiData, tableData] = await Promise.all([
        homeAPI.getKPIData(filters),
        homeAPI.getTableData(filters)
      ]);
      return { kpiData, tableData };
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};
