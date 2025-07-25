"use client";
import Button from "@/components/Buttom";
import useCreatePost from "@/hooks/useCreatePost";
import { useParams } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  description: string;
  company: string;
  location: string;
};

const Update = () => {
  const params = useParams();
  const id = params.id;

  const { mutate } = useCreatePost();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    mutate({
      title: data.title,
      description: data.description,
      company: data.company,
      location: data.location,
    });
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="text-4xl">Create a Job Post</div>
      <hr className="border-t-2 border-gray-600 mb-4" />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input
          className="border rounded border-gray-200 p-4 text-xl w-100"
          {...register("title", {
            required: "Please enter a title.",
          })}
        />
        {errors.title && (
          <span className="text-red-600">{errors.title.message}</span>
        )}
        <label>Description</label>
        <textarea
          className="border rounded border-gray-200 p-4 text-xl w-100"
          {...register("description", {
            required: "Please enter a description.",
          })}
        />
        {errors.description && (
          <span className="text-red-600">{errors.description.message}</span>
        )}
        <label>Company</label>
        <input
          className="border rounded border-gray-200 p-4 text-xl w-100"
          {...register("company", {
            required: "Please enter a company.",
          })}
        />
        {errors.company && (
          <span className="text-red-600">{errors.company.message}</span>
        )}
        <label>Location</label>
        <input
          className="border rounded border-gray-200 p-4 text-xl w-100"
          {...register("location", {
            required: "Please enter a location.",
          })}
        />
        {errors.location && (
          <span className="text-red-600">{errors.location.message}</span>
        )}

        <Button type="submit" className="w-100 mt-4">
          Create a Post
        </Button>
      </form>
    </div>
  );
};

export default Update;
