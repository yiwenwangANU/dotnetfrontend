import Skeleton from '@/components/Skeleton';

export default function Loading() {
  return (
    <div className="relative rounded-2xl w-3/4 p-3 mx-auto">
      <Skeleton variant="text" width="50%" height={32} className="mb-2" />
      <Skeleton variant="text" width="30%" height={24} className="mb-1" />
      <Skeleton variant="text" width="20%" height={20} className="mb-4" />
      <Skeleton variant="rectangular" width="100%" height={200} className="mb-4" />
      <Skeleton variant="text" width="25%" height={16} className="absolute top-3 right-3" />
    </div>
  );
}