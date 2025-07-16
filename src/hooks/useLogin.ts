import { loginUser } from "@/api/apiAuth";
import { useMutation } from "@tanstack/react-query";

const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      console.log("success!");
    },
  });
};
export default useLogin;
