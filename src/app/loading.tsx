import JobPostingSkeleton from '@/components/JobPostingSkeleton';

export default function Loading() {
  return (
    <div className="flex flex-row gap-5 justify-center items-center flex-wrap">
      {[...Array(6)].map((_, index) => (
        <JobPostingSkeleton key={index} />
      ))}
    </div>
  );
}