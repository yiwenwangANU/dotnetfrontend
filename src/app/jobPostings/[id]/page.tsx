"use client";
import { useParams } from "next/navigation";

const JobPosting = () => {
  const params = useParams();
  const id = params.id;
  return <div>hello, {id}</div>;
};

export default JobPosting;
