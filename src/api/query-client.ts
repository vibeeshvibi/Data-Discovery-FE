import { QueryClient } from '@tanstack/react-query';

// Create a client instance
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, 
      gcTime: 10 * 60 * 1000, 
      retry: 2,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
      refetchOnMount: 'always',
      refetchOnReconnect: 'always',
    },
    mutations: {
      // Default mutation options
      retry: 1,
    },
  },
});

// Helper functions for query management
export const queryKeys = {
  // Add query keys here as we create more endpoints
  home: ['home'] as const,
  kpi: (filters?: Record<string, any>) => ['kpi', filters] as const,
  dataStores: (filters?: Record<string, any>) => ['dataStores', filters] as const,
  tables: (filters?: Record<string, any>) => ['tables', filters] as const,
} as const;

// Query key factory for easier key management
export const createQueryKey = (base: string, ...args: (string | number | undefined | null)[]) => {
  return [base, ...args.filter(Boolean)] as const;
};

// Helper for invalidating related queries
export const invalidateRelatedQueries = (baseKey: string) => {
  queryClient.invalidateQueries({ queryKey: [baseKey] });
};
