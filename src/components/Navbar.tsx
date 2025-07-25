import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center shadow-md shadow-grey-50 text-xl font-light p-7 justify-between">
      <div className="flex flex-row items-center gap-10">
        <Link className="text-3xl" href={"/"}>
          NavBar
        </Link>
        <Link href={"/jobPostings/create"}>Create</Link>
        <Link href={"/identity/account/test"}>Test</Link>
      </div>

      <Link href={"/identity/account/login"} className="px-4">
        Login
      </Link>
    </div>
  );
};

export default Navbar;
