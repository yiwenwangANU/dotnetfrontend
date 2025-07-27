import axios, { AxiosError } from 'axios';

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function handleApiError(error: unknown, defaultMessage: string): never {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message?: string; error?: string }>;
    
    if (axiosError.response) {
      // Server responded with error status
      const message = axiosError.response.data?.message || 
                     axiosError.response.data?.error || 
                     defaultMessage;
      throw new ApiError(message, axiosError.response.status, axiosError.code);
    } else if (axiosError.request) {
      // Request made but no response
      throw new ApiError('No response from server. Please check your connection.', 0, 'NETWORK_ERROR');
    } else {
      // Error in request setup
      throw new ApiError('Failed to make request. Please try again.', 0, 'REQUEST_ERROR');
    }
  }
  
  // Non-axios error
  if (error instanceof Error) {
    throw error;
  }
  
  throw new ApiError(defaultMessage);
}