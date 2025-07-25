"use client";
import useGetPost from "@/hooks/useGetPost";
import { formatDistanceToNow } from "date-fns";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const JobPosting = () => {
  const [userName, setUserName] = useState<string | null>(null);
  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  }, []);
  const params = useParams();
  const id = Number(params.id);
  const { data, isPending, isError } = useGetPost(id);
  if (isPending) return <div>Loading...</div>;
  if (isError || !data) return <div>Failed to load job posting.</div>;
  const post = data.jobPosting;
  return (
    <div key={post.title} className="relative rounded-2xl w-3/4 p-3 mx-auto">
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
  );
};

export default JobPosting;
