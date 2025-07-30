"use client";
import useCheckLogin from "@/hooks/useCheckLogin";
import Link from "next/link";

const Navbar = () => {
  const { data: isLogin } = useCheckLogin();
  return (
    <div className="flex flex-row items-center shadow-md shadow-grey-50 text-xl font-light p-7 justify-between">
      <div className="flex flex-row items-center gap-10">
        <Link className="text-3xl" href={"/"}>
          NavBar
        </Link>
        {isLogin ? <Link href={"/jobPostings/create"}>Create</Link> : null}
        {isLogin ? <Link href={"/identity/account/test"}>Test</Link> : null}
      </div>

      {isLogin ? null : (
        <Link href={"/identity/account/login"} className="px-4">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
