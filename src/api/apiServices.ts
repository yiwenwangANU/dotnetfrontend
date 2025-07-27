import axios from "axios";
import axiosInstance from "./api-instance";
import { env } from "@/lib/env";
import { handleApiError } from "@/lib/api-error-handler";

const API_BASE_URL = env.NEXT_PUBLIC_API_URL;

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
    handleApiError(error, "Failed to create job posting");
  }
};

export const getPostings = async (): Promise<GetPostingsResponse> => {
  try {
    const response = await axios.get<GetPostingsResponse>(
      `${API_BASE_URL}/api/JobPostings/getPostings`
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch job postings");
  }
};

export const getPosting = async (id: number): Promise<GetPostingResponse> => {
  try {
    const response = await axios.get<GetPostingResponse>(
      `${API_BASE_URL}/api/JobPostings/getPosting/${id}`
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch job posting");
  }
};

export const deletePosting = async (id: number): Promise<boolean> => {
  try {
    const response = await axiosInstance.delete<boolean>(
      `${API_BASE_URL}/api/JobPostings/deletePosting/${id}`
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to delete job posting");
  }
};

export const updatePosting = async (
  data: PostData,
  id: number
): Promise<boolean> => {
  try {
    const response = await axiosInstance.post<boolean>(
      `${API_BASE_URL}/api/JobPostings/updatePosting/${id}`,
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to update job posting");
  }
};
