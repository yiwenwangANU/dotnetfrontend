import { testLogin } from "@/api/apiAuth";
import { useQuery } from "@tanstack/react-query";

const useTest = () => {
  const query = useQuery({ queryKey: ["testLogin"], queryFn: testLogin });
  return query;
};
export default useTest;
