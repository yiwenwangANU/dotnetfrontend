"use client";
import useTest from "@/hooks/useTest";

const Test = () => {
  const { data, isPending, isError } = useTest();
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="text-4xl">
        {isPending
          ? "Loading"
          : isError
          ? "Something went wrong, plz login again"
          : data?.secret}
      </div>
    </div>
  );
};
export default Test;
