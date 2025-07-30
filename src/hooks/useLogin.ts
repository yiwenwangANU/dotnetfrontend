"use client";
import { LoginResponse, loginUser } from "@/api/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (res: LoginResponse) => {
      toast.success(`Welcome back, ${res.email}!`);
      queryClient.invalidateQueries({ queryKey: ["getProfile"] });
      queryClient.invalidateQueries({ queryKey: ["checkLogin"] });
      router.push("/");
    },
  });
};
export default useLogin;
