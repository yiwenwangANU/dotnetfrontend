"use client";
import Button from "@/components/Button";
import useDeletePost from "@/hooks/useDeletePost";
import useGetPost from "@/hooks/useGetPost";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getPorfile } from "@/api/apiAuth";

const JobPosting = () => {
  const { data: profile } = useQuery({
    queryKey: ["getProfile"],
    queryFn: getPorfile,
    retry: false,
  });
  const params = useParams();
  const id = Number(params.id);
  const { data, isPending, isError } = useGetPost(id);
  const { mutate, isPending: isDeleting } = useDeletePost();
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
      {profile?.UserName ? (
        <div className="flex flex-row justify-end items-center gap-5 pt-10">
          <Link href={`/jobPostings/update/${id}`}>
            <Button>Edit</Button>
          </Link>
          <Button
            variant="danger"
            disabled={isDeleting}
            onClick={() => {
              mutate(id);
            }}
          >
            Delete
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default JobPosting;
