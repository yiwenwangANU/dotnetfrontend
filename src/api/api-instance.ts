import axios from "axios";
import { env } from "@/lib/env";

const API_BASE_URL = env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Interceptor to attach CSRF token
axiosInstance.interceptors.request.use((config) => {
  const csrfMatch = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
  if (csrfMatch) {
    config.headers["X-CSRF-TOKEN"] = csrfMatch[1];
  }
  return config;
});

export default axiosInstance;
