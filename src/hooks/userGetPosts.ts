import { getPostings } from "@/api/apiServices";
import { useQuery } from "@tanstack/react-query";

const useGetPosts = () => {
  return useQuery({ queryKey: ["getPostings"], queryFn: getPostings });
};

export default useGetPosts;
