"use client";
import useGetPosts from "@/hooks/userGetPosts";
import { formatDistanceToNow } from "date-fns";

const JobPostings = () => {
  const { data } = useGetPosts();
  return (
    <div className="w-3/4">
      <div className="font-semibold text-3xl py-6">Recommended for you</div>
      <div className="flex flex-col gap-6 w-full">
        {data?.jobPostings.map((post) => (
          <div
            key={post.title}
            className="relative border-4 border-gray-100 rounded-2xl w-full p-3 hover:cursor-pointer hover:border-blue-600"
          >
            <div className="font-semibold text-2xl">{post.title}</div>
            <div className="text-gray-600 text-lg">{post.company}</div>
            <div className="text-gray-600">{post.location}</div>
            <div>{post.description}</div>
            <div className="text-gray-600 absolute top-3 right-3">
              {formatDistanceToNow(new Date(post.postedDate), {
                addSuffix: true,
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPostings;
