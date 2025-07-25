import { getPosting } from "@/api/apiServices";
import { useQuery } from "@tanstack/react-query";

const useGetPost = (id: number) => {
  return useQuery({
    queryKey: ["getPostings", id],
    queryFn: () => getPosting(id),
  });
};

export default useGetPost;
