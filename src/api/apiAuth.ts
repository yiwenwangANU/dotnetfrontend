import axios from "axios";
import { env } from "@/lib/env";
import { handleApiError } from "@/lib/api-error-handler";

const API_BASE_URL = env.NEXT_PUBLIC_API_URL;

export type LoginData = {
  email: string;
  password: string;
};
export type RegisterData = {
  email: string;
  password: string;
  isJobSeeker: boolean;
};
export type LoginResponse = {
  token: string;
  userName: string;
};

export type RegisterResponse = {
  message: string;
};

export type TestResponse = {
  secret: string;
};

export const registerUser = async (
  userData: RegisterData
): Promise<RegisterResponse> => {
  try {
    const response = await axios.post<RegisterResponse>(
      `${API_BASE_URL}/api/Auth/Register`,
      userData
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Registration failed");
  }
};
export const loginUser = async (
  userData: LoginData
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${API_BASE_URL}/api/Auth/Login`,
      userData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Login failed");
  }
};

export const testLogin = async (): Promise<TestResponse> => {
  try {
    const response = await axios.get<TestResponse>(`${API_BASE_URL}/api/test`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    handleApiError(error, "Test login failed");
  }
};
