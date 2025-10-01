import Image from "next/image";
import herobackgroundimage from "../../public/herobackgroundimage.svg";
import github from "../../public/github.svg";
import Link from "next/link";
import dashboard from "../../public/dashboardoverview.svg";

export default function Hero() {
  return (
    <section>
      <div
        id="home"
        className="relative mx-auto w-full max-w-screen-sm lg:max-w-6xl px-4 lg:px-8 pb-10 lg:pb-16 pt-6 lg:pt-12 scroll-mt-[120px]"
      >
        <Image
          src={herobackgroundimage}
          alt="heroImage"
          className="mt-0 h-full w-full lg:w-[900px] lg:mt-[-30px] lg:z-0"
          priority
        />

        <div className=" p-4 absolute top-0 left-0 lg:left-[-100px] w-full lg:w-[110%] h-full mt-[125px] lg:mt-[160px] font-sans">
          <h1 className="mb-3 text-[40px] text-center font-[500] text-[#101928] lg:text-[75px] lg:leading-[96px] lg:font-[600] lg:w-full lg:tracking-[0.02em]">
            See your Lightning
            <span className="hidden lg:inline"> </span>
            <br className="lg:hidden" />
            Node Like Never
            <span className="hidden lg:inline"> </span>
            <br className="lg:hidden" />
            Before with
            <span className="hidden lg:inline"> </span>
            <br className="lg:hidden" />
            <span className="text-[#2151f5]">Node</span>
            <span className="text-[#ff9d2b]">gaze</span>
          </h1>


          <div className="flex flex-col justify-center w-full lg:mt-[50px] lg:w-[]">
            <p className="mb-6 text-[13.5px] lg:text-[24px] font-[500] text-[#3D3D3D] text-center lg:max-w-[95%] lg:mx-auto lg:tracking-[0.01em]">
              A powerful open-source observability tool for Lightning nodes.
              Monitor performance, track liquidity, and gain real-time insights
              across LND, Core Lightning, and Eclair — all in one dashboard.
            </p>

            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 lg:h-[64px] items-center justify-center gap-2 rounded-full bg-[#2151f5] px-6 lg:px-4 text-white active:translate-y-[2px] active:shadow-[0_4px_0_#1737a5] w-[200px] lg:w-[260px] lg:mt-[30px] self-center"
            >
              <Image src={github} alt="github" className="lg:w-[35px]"/>
              <span className="text-[15px] lg:text-[25px] font-semibold">Check Github</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[120px] lg:mt-[-200px] lg:absolute lg:w-[80%] lg:flex lg:justify-center lg:items-center lg:mx-[10%]">
        <Image src={dashboard} alt="dashboard overview" className="lg:w-full"/>
        <div className="hidden lg:block absolute bottom-[-225px] left-0 w-full h-[225px] bg-gradient-to-b from-[#FFFFFF] to-[#EFF6FF] blur-[124px]"></div>
      </div>
    </section>
  );
}
