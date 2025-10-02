import Image from "next/image";
import logo from "../../public/logo.svg";
import xlogo from "../../public/footerxlogo.svg";
import github from "../../public/footergithublogo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-[0px] lg:mt-[0px] bg-black px-[20px] py-[40px] lg:w-screen">
      <div className="flex flex-col items-center text-center lg:mt-[50px] lg:mb-[30px]">
        <div className="flex items-center gap-[8px]">
          <Image src={logo} alt="Nodegaze" className="lg:w-[210px]"/>
        </div>

        <nav className="mt-[28px] lg:mt-[50px] flex flex-col lg:flex-row items-center gap-[18px] lg:gap-[100px]">
          <Link href="#home" className="text-white text-[20px] lg:text-[25px]">Home</Link>
          <Link href="#product" className="text-white text-[20px] lg:text-[25px]">The Product</Link>
          <Link href="#contributors" className="text-white text-[20px] lg:text-[25px]">Contributors</Link>
        </nav>

        <div className="mt-[28px] lg:mt-[50px] flex items-center gap-[10px] lg:gap-[30px]">
          <Link aria-label="GitHub" href="#" className="inline-flex items-center justify-center rounded-[8px]">
            <Image src={github} alt="GitHub" width={28} height={28} className="lg:w-[50px]" />
          </Link>
          <Link aria-label="X" href="#" className="inline-flex items-center justify-center rounded-[8px]">
            <Image src={xlogo} alt="X" width={28} height={28}  className="lg:w-[50px]"/>
          </Link>
        </div>
      </div>
    </footer>
  );
}


