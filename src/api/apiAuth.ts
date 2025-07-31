import axios from "axios";
import { env } from "@/lib/env";
import { handleApiError } from "@/lib/api-error-handler";
import axiosInstance from "./api-instance";

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
export type LoginResponse = { email: string };

export type RegisterResponse = {
  message: string;
};

export type TestResponse = {
  secret: string;
};
export type GetProfileResponse = {
  UserId: string;
  UserName: string;
  Roles: [string];
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
    const response = await axiosInstance.get<TestResponse>(
      `${API_BASE_URL}/api/test`
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Test login failed");
  }
};

export const getPorfile = async (): Promise<GetProfileResponse> => {
  try {
    const response = await axiosInstance.get<GetProfileResponse>(
      `${API_BASE_URL}/api/auth/Profile`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    handleApiError(error, "Failed to get user profile");
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await axiosInstance.post(`${API_BASE_URL}/api/auth/logout`);
  } catch (error) {
    handleApiError(error, "Logout failed");
  }
};
