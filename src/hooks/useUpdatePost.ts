import { PostData, updatePosting } from "@/api/apiServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useUpdatePost = (id: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: (data: PostData) => updatePosting(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPostings"] });
      queryClient.invalidateQueries({ queryKey: ["getPosting", id] });
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
