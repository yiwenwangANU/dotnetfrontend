"use client";
import { LoginResponse, loginUser } from "@/api/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (res: LoginResponse) => {
      toast.success(`Welcome back, ${res.email}!`);
      router.push("/");
    },
  });
};
export default useLogin;
