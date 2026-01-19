import { apiClient } from '../client';
import { API_ROUTES } from '../routes';
import type { HomeAPIResponse, KPIData, QueryParams } from '../types';

// Home page API endpoints
export const homeAPI = {
  // Get KPI data for the home page
  getKPIData: async (params?: QueryParams): Promise<KPIData> => {
    try {
      const response = await fetch(API_ROUTES.HOME.KPI);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Return the data directly since mockachino returns the object directly
      return data;
    } catch (error) {
      console.error('Failed to fetch KPI data:', error);
      // Return default values on error
      return {
        resourceGroups: 0,
        servers: 0,
        dataStores: 0,
        tablesOrFiles: 0,
        measures: 0
      };
    }
  },

  // Get table data for the home page
  getTableData: async (params?: QueryParams) => {
    try {
      const response = await fetch(API_ROUTES.HOME.DATA);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch table data:', error);
      return { data: [] };
    }
  },

  // Get dashboard overview data
  getDashboardOverview: async (): Promise<KPIData> => {
    const response = await apiClient.get<HomeAPIResponse>('/home/overview');
    return response.data.data;
  },

  // Refresh all data
  refreshData: async (): Promise<KPIData> => {
    const response = await apiClient.post<HomeAPIResponse>('/home/refresh');
    return response.data.data;
  },

  // Get recent activities
  getRecentActivities: async (limit: number = 10) => {
    const response = await apiClient.get('/home/activities', {
      params: { limit }
    });
    return response.data;
  },

  // Get system health status
  getSystemHealth: async () => {
    const response = await apiClient.get('/home/health');
    return response.data;
  },
};

// Individual query hooks for TanStack Query
export const homeQueries = {
  // KPI data query
  useKPIData: () => {
    return homeAPI.getKPIData();
  },

  // Dashboard overview query
  useDashboardOverview: () => {
    return homeAPI.getDashboardOverview();
  },

  // Recent activities query
  useRecentActivities: (limit: number = 10) => {
    return homeAPI.getRecentActivities(limit);
  },

  // System health query
  useSystemHealth: () => {
    return homeAPI.getSystemHealth();
  },
};

// Example usage:
// const { data: kpiData, isLoading, error, refetch } = useQuery({
//   queryKey: ['home', 'kpi'],
//   queryFn: () => homeAPI.getKPIData(),
// });
