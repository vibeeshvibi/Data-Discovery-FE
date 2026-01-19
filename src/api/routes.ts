
export const API_ROUTES = {
  // Home page endpoints
  HOME: {
    KPI: 'https://www.mockachino.com/b3e67a78-6f0f-41/kpi-card',
    DATA: 'https://www.mockachino.com/b3e67a78-6f0f-41/home',
  },

  // Data store endpoints
  DATA_STORE: {
    LIST: '/data-store',
    DETAIL: '/data-store/:id',
  },

  // Table endpoints
  TABLE: {
    LIST: '/tables',
    DETAIL: '/tables/:id',
  },

  // Other endpoints can be added here
} as const;

// Helper to get route with parameters
export const getRoute = (route: string, params?: Record<string, string | number>) => {
  if (!params) return route;
  
  return route.replace(/:(\w+)/g, (match, key) => {
    return params[key]?.toString() || match;
  });
};

// Environment-based base URL (if using your own backend)
export const getBaseUrl = () => {
  return import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
};

// Full URL builder
export const buildUrl = (endpoint: string, baseUrl?: string) => {
  if (endpoint.startsWith('http')) {
    return endpoint; // Full URL (like mockachino)
  }
  
  const base = baseUrl || getBaseUrl();
  return `${base}${endpoint}`;
};
