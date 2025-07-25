"use client";
import { createPost, CreatePostResponse } from "@/api/apiServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useCreatePost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: createPost,
    onSuccess: (res: CreatePostResponse) => {
      console.log(res);
      queryClient.invalidateQueries({ queryKey: ["getPostings"] });
      toast.success("Job Posting created successfully!");
      router.push("/");
    },
    onError: () => {
      toast.error("Something goes wrong! Please login again!");
      router.push("/identity/account/login");
    },
  });
};

export default useCreatePost;
