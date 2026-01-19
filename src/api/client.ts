import axios, { AxiosError } from 'axios';
import type { AxiosInstance } from 'axios';

// Environment variables for API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Create axios instance with default configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for handling common errors
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle common HTTP errors
    const status = error.response?.status;
    if (status === 403) {
      // Forbidden
      console.error('Access denied');
    } else if (status && status >= 500) {
      // Server error
      console.error('Server error occurred');
    }
    
    return Promise.reject(error);
  }
);

export { apiClient };
export type { AxiosError };
