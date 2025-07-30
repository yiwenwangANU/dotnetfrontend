import { getPorfile } from "@/api/apiAuth";
import { useQuery } from "@tanstack/react-query";

const useCheckLogin = () => {
  return useQuery({
    queryKey: ["checkLogin"],
    queryFn: () => getPorfile(),
    retry: false,
    staleTime: 1000 * 60 * 5, //  Cache for 5 minutes
    select: (data) => Boolean(data?.UserId), // ✅ Return true/false
  });
};

export default useCheckLogin;
