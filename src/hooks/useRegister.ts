import { RegisterResponse, registerUser } from "@/api/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (res: RegisterResponse) => {
      console.log(res.message);
      toast.success("Register successfully!");
    },
  });
};
export default useRegister;
