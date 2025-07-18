import { loginUser } from "@/api/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast.success("Login successfully!");
    },
  });
};
export default useLogin;
