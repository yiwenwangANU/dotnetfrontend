import useGetProfile from "@/hooks/useGetProfile";

const Profile = () => {
  const { data: profile } = useGetProfile();
  console.log(profile);
  return <div>Profile</div>;
};

export default Profile;
