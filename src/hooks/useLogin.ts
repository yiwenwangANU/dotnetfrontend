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
      console.log(res);
      toast.success(`Welcome back, ${res.userName}!`);
      localStorage.setItem("token", res.token);
      localStorage.setItem("userName", res.userName);
      router.push("/");
    },
  });
};
export default useLogin;
