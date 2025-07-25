import { PostData, updatePosting } from "@/api/apiServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useUpdatePost = (data: PostData, id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => updatePosting(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPostings"] });
      queryClient.invalidateQueries({ queryKey: ["getPosting", id] });
      toast.success("Job Posting updated successfully!");
    },
  });
};

export default useUpdatePost;
