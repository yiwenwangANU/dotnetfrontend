import { createPost, CreatePostResponse } from "@/api/apiServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: (res: CreatePostResponse) => {
      queryClient.invalidateQueries({ queryKey: ["getPostings"] });
      toast.success("Job Posting created successfully!");
    },
  });
};

export default useCreatePost;
