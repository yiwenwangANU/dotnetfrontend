"use client";
import { deletePosting } from "@/api/apiServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useDeletePost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: (id: number) => deletePosting(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["getPostings"] });
      queryClient.removeQueries({ queryKey: ["getPosting", id] });
      toast.success("Job Posting deleted successfully!");
      router.push("/");
    },
    onError: () => {
      toast.error("Something goes wrong! Please login again!");
      router.push("/identity/account/login");
    },
  });
};

export default useDeletePost;
