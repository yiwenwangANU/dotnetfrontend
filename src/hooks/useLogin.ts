import { loginUser } from "@/api/apiAuth";
import { useMutation } from "@tanstack/react-query";

const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      // Invalidate and refetch
    },
  });
};
export default useLogin;
