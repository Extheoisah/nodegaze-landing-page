import Image from "next/image";
import herobackgroundimage from "../../public/herobackgroundimage.svg";
import github from "../../public/github.svg";
import Link from "next/link";
import dashboard from "../../public/dashboardoverview.svg";
import gradient from "../../public/gradient.svg";

export default function Hero() {
  return (
    <section className="w-full lg:w-screen">
      <div
        id="home"
        className="relative mx-auto w-full lg:max-w-[1440px] px- lg:px-8 pb-10 pt-6 lg:pt-12 scroll-mt-[120px] lg:w-screen"
        style={{
          backgroundImage: `url(${herobackgroundimage.src})`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <div className="w-full flex flex-col items-center pt-[120px] lg:pt-[120px]">
          <h1 className="mb-3 text-[40px] text-center font-[500] text-[#101928] md:text-[60px] 2xl:text-[65px] lg:leading-[96px] max-w-[90%] lg:max-w-[85%] 2xl:max-w-[80%] lg:tracking-[0.02em]">
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

          <p className="mb-6 text-[13.5px] lg:text-[21px] font-[500] text-[#3D3D3D] text-center max-w-[85%] lg:max-w-[75%] 2xl:max-w-[75%] lg:tracking-[0.01em]">
            A powerful open-source observability tool for Lightning nodes.
            Monitor performance, track liquidity, and gain real-time insights
            across LND, Core Lightning, and Eclair all in one dashboard.
          </p>

          <Link
            href="https://github.com/extheoisah/nodegaze"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 lg:h-[64px] items-center justify-center gap-2 rounded-full bg-[#2151f5] px-6 lg:px-4 text-white active:translate-y-[2px] active:shadow-[0_4px_0_#1737a5] w-[200px] lg:w-[220px] lg:mt-[30px]"
          >
            <Image src={github} alt="github" className="lg:w-[25px]" />
            <span className="text-[15px] lg:text-[23px] font-semibold">
              Check Github
            </span>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto lg:px-8 mt-[60px] lg:mt-[80px] lg:w-[90%]">
        <div className="flex justify-center">
          <Image
            src={dashboard}
            alt="dashboard overview"
            className="w-full max-w-full"
          />
        </div>
      </div>

      <div className="hidden lg:block relative w-full mt-[-100px] 2xl:mt-[-200px] lg:w-screen">
        <div className="lg:w-screen">
          <Image
            src={gradient}
            alt="gradient"
            className="w-full"
          />
        </div>
      </div>
      
    </section>
  );
}
