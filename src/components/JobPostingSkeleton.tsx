import Skeleton from './Skeleton';

const JobPostingSkeleton = () => {
  return (
    <div className="relative rounded-2xl p-5 m-2 w-[330px] h-[330px] bg-gray-100 border border-gray-200 shadow-sm">
      <Skeleton variant="text" width="80%" height={28} className="mb-2" />
      <Skeleton variant="text" width="60%" height={20} className="mb-1" />
      <Skeleton variant="text" width="40%" height={16} className="mb-4" />
      <Skeleton variant="rectangular" width="100%" height={120} />
      <Skeleton variant="text" width="30%" height={14} className="absolute top-5 right-5" />
    </div>
  );
};

export default JobPostingSkeleton;