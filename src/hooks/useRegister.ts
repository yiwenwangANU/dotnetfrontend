import { registerUser } from "@/api/apiAuth";
import { useMutation } from "@tanstack/react-query";

const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      console.log("success!");
    },
  });
};
export default useRegister;
