import { useQuery } from '@tanstack/react-query';
import { homeAPI } from '../../api/services/home';
import { queryKeys } from '../../api/query-client';


export const useKPIData = (filters?: Record<string, any>) => {
  return useQuery({
    queryKey: queryKeys.kpi(filters),
    queryFn: () => homeAPI.getKPIData(filters),
    staleTime: 2 * 60 * 1000, 
    gcTime: 5 * 60 * 1000, 
  });
};

// Hook for dashboard overview
export const useDashboardOverview = () => {
  return useQuery({
    queryKey: queryKeys.home,
    queryFn: homeAPI.getDashboardOverview,
    staleTime: 3 * 60 * 1000, // 3 minutes
  });
};

// Hook for recent activities
export const useRecentActivities = (limit: number = 10) => {
  return useQuery({
    queryKey: ['home', 'activities', limit],
    queryFn: () => homeAPI.getRecentActivities(limit),
    staleTime: 1 * 60 * 1000, // 1 minute
  });
};

// Hook for system health
export const useSystemHealth = () => {
  return useQuery({
    queryKey: ['home', 'health'],
    queryFn: homeAPI.getSystemHealth,
    staleTime: 30 * 1000, // 30 seconds
    refetchInterval: 60 * 1000, // Auto-refresh every minute
  });
};

// Hook for manual refresh
export const useRefreshData = () => {
  return useQuery({
    queryKey: ['home', 'refresh'],
    queryFn: homeAPI.refreshData,
    staleTime: 0, // Always consider stale
    gcTime: 0, // Don't cache
    // This should be triggered manually
  });
};
