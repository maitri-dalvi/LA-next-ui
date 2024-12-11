import Menu from "@/app/(dashboard)/judge/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 flex flex-col items-center">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex flex-col items-center gap-2 mb-2" 
        >
          <Image
            src="/logomain.png"
            alt="logo"
            width={100} 
            height={100} 
            className="lg:w-[150px] lg:h-auto" 
          />
          <span className="hidden lg:block font-bold text-center text-gray-700">
            Judge Portal
          </span>
        </Link>

        {/* Menu Section */}
        <Menu />
      </div>

      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
