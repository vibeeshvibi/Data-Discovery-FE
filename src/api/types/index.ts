// Base API response wrapper
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
  timestamp?: string;
}

// Base API error
export interface ApiError {
  message: string;
  code?: string | number;
  details?: any;
}

// Home page types
export interface KPIData {
  resourceGroups: number;
  servers: number;
  dataStores: number;
  tablesOrFiles: number;
  measures: number;
}

export interface HomeAPIResponse extends ApiResponse<KPIData> {}

// Data store types
export interface DataStore {
  id: string;
  name: string;
  description?: string;
  sourceTable: string;
  tableCount: number;
  createdBy: string;
  resourceGroup: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  updatedAt: string;
}

export interface DataStoreAPIResponse extends ApiResponse<DataStore[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Table types
export interface Table {
  id: string;
  name: string;
  schema: string;
  dataStoreId: string;
  dataStoreName: string;
  columnCount: number;
  rowCount?: number;
  description?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface TableAPIResponse extends ApiResponse<Table[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Common query parameters
export interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  filters?: Record<string, any>;
}

// Generic API responses with pagination
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
