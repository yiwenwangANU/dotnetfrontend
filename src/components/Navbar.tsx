"use client";
import useCheckLogin from "@/hooks/useCheckLogin";
import useLogout from "@/hooks/useLogout";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const { data: isLogin, isPending } = useCheckLogin();
  const { mutate: logout } = useLogout();
  if (isPending) return null;
  console.log(isLogin);
  return (
    <div className="flex flex-row items-center shadow-md shadow-grey-50 text-xl font-light p-7 justify-between">
      <div className="flex flex-row items-center gap-10">
        <Link className="text-3xl" href={"/"}>
          NavBar
        </Link>
        {isLogin ? <Link href={"/jobPostings/create"}>Create</Link> : null}
        {isLogin ? <Link href={"/identity/account/test"}>Test</Link> : null}
      </div>

      {isLogin ? (
        <Button onClick={() => logout()} variant="danger">
          Logout
        </Button>
      ) : (
        <Link href={"/identity/account/login"} className="px-4">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
