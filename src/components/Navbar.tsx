import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center gap-10 shadow-md shadow-grey-50 text-xl font-light p-7">
      <Link className="text-3xl" href={"/"}>
        NavBar
      </Link>
      <Link href={"/identity/account/login"}>Login</Link>
      <div>Item2</div>
    </div>
  );
};

export default Navbar;
