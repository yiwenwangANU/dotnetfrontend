import axios from "axios";
import axiosInstance from "./api-instance";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type UserData = {
  userName: string;
  password: string;
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
  userData: UserData
): Promise<RegisterResponse> => {
  try {
    const response = await axios.post<RegisterResponse>(
      `${API_BASE_URL}/api/Auth/Register`,
      userData,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(error.response.data.message || "Register failed");
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error("No response from server");
      }
    }
    throw error;
  }
};
export const loginUser = async (userData: UserData): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${API_BASE_URL}/api/Auth/Login`,
      userData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(error.response.data.message || "Login failed");
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error("No response from server");
      }
    }
    throw error;
  }
};

export const testLogin = async (): Promise<TestResponse> => {
  try {
    const response = await axiosInstance.get<TestResponse>(
      `${API_BASE_URL}/api/test`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(error.response.data.message || "Login failed");
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error("No response from server");
      }
    }
    throw error;
  }
};
