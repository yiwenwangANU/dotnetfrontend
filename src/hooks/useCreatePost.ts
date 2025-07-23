import { createPost, CreatePostResponse } from "@/api/apiServices";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCreatePost = () => {
  return useMutation({
    mutationFn: createPost,
    onSuccess: (res: CreatePostResponse) => {
      console.log(res);
      toast.success("Job Posting created successfully!");
    },
  });
};

export default useCreatePost;
