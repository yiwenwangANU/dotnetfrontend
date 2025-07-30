import { getPorfile } from "@/api/apiAuth";
import { useQuery } from "@tanstack/react-query";

const useGetProfile = () => {
  return useQuery({
    queryKey: ["getProfile"],
    queryFn: () => getPorfile(),
  });
};

export default useGetProfile;
