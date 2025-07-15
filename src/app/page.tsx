import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow flex items-top justify-center pt-10">
        <div className="text-8xl font-light text-slate-800">Welcome</div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
