"use client";
import { logoutUser } from "@/api/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      toast.success("Logged out successfully");
      queryClient.invalidateQueries({ queryKey: ["getProfile"] });
      queryClient.invalidateQueries({ queryKey: ["checkLogin"] });
      router.push("/identity/account/login");
    },
  });
};
export default useLogout;