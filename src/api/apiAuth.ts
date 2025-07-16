import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type UserData = {
  userName: string;
  password: string;
};

type LoginResponse = {
  token: string;
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
