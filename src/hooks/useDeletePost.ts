import { deletePosting } from "@/api/apiServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useDeletePost = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deletePosting(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPostings"] });
      queryClient.invalidateQueries({ queryKey: ["getPosting", id] });
      toast.success("Job Posting deleted successfully!");
    },
  });
};

export default useDeletePost;
