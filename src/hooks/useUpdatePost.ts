import { PostData, updatePosting } from "@/api/apiServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useUpdatePost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: (variable: { id: number; data: PostData }) =>
      updatePosting(variable.data, variable.id),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["getPostings"] });
      queryClient.invalidateQueries({ queryKey: ["getPosting", variables.id] });
      toast.success("Job Posting updated successfully!");
      router.push("/");
    },
    onError: () => {
      toast.error("Something goes wrong! Please login again!");
      router.push("/identity/account/login");
    },
  });
};

export default useUpdatePost;
