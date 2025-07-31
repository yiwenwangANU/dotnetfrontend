"use client";
import Button from "@/components/Button";
import useGetProfile from "@/hooks/useGetProfile";
import Link from "next/link";

const ProfilePage = () => {
  const { data: profile, isLoading, isError } = useGetProfile();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="text-xl">Loading profile...</div>
      </div>
    );
  }

  if (isError || !profile) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh] gap-4">
        <div className="text-xl text-red-600">Failed to load profile</div>
        <Link href="/identity/account/login">
          <Button>Go to Login</Button>
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-4">
          <label className="text-gray-600 text-sm">User ID</label>
          <p className="text-lg font-medium">{profile.userId}</p>
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-sm">Username</label>
          <p className="text-lg font-medium">{profile.userName}</p>
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-sm">Roles</label>
          <div className="flex flex-wrap gap-2 mt-1">
            {profile.roles.map((role, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Link href="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
        <Link href="/jobPostings/create">
          <Button>Create Job Posting</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
