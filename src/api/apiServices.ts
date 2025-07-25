import axios from "axios";
import axiosInstance from "./api-instance";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export type PostData = {
  title: string;
  description: string;
  company: string;
  location: string;
};

export type CreatePostResponse = {
  title: string;
  description: string;
  company: string;
  location: string;
  postedDate: Date;
  userName: string;
};

export type GetPostingResponse = {
  jobPosting: {
    id: number;
    title: string;
    description: string;
    company: string;
    location: string;
    postedDate: Date;
    userName: string;
  };
};

export type GetPostingsResponse = {
  jobPostings: [
    {
      id: number;
      title: string;
      description: string;
      company: string;
      location: string;
      postedDate: Date;
      userName: string;
    }
  ];
};
export const createPost = async (
  postData: PostData
): Promise<CreatePostResponse> => {
  try {
    const response = await axiosInstance.post<CreatePostResponse>(
      `${API_BASE_URL}/api/JobPostings/createPosting`,
      postData,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(
          error.response.data.message || "JobPosting creating failed"
        );
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error("No response from server");
      }
    }
    throw error;
  }
};

export const getPostings = async (): Promise<GetPostingsResponse> => {
  try {
    const response = await axios.get<GetPostingsResponse>(
      `${API_BASE_URL}/api/JobPostings/getPostings`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(
          error.response.data.message || "JobPosting creating failed"
        );
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error("No response from server");
      }
    }
    throw error;
  }
};

export const getPosting = async (id: number): Promise<GetPostingResponse> => {
  try {
    const response = await axios.get<GetPostingResponse>(
      `${API_BASE_URL}/api/JobPostings/getPosting/${id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(
          error.response.data.message || "JobPosting creating failed"
        );
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error("No response from server");
      }
    }
    throw error;
  }
};

export const deletePosting = async (id: number): Promise<boolean> => {
  try {
    const response = await axiosInstance.get<boolean>(
      `${API_BASE_URL}/api/JobPostings/deletePosting/${id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(
          error.response.data.message || "JobPosting creating failed"
        );
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error("No response from server");
      }
    }
    throw error;
  }
};

export const updatePosting = async (
  data: PostData,
  id: number
): Promise<boolean> => {
  try {
    const response = await axiosInstance.get<boolean>(
      `${API_BASE_URL}/api/JobPostings/updatePosting/${id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(
          error.response.data.message || "JobPosting creating failed"
        );
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error("No response from server");
      }
    }
    throw error;
  }
};
