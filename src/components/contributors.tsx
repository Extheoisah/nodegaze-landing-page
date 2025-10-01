import Image, { StaticImageData } from "next/image";
import bg from "../../public/contributorbackground.svg";
import dsbg from "../../public/desktophexagon.svg"
import theo from "../../public/theo.svg";
import cam from "../../public/cam.svg";
import nully from "../../public/nully.svg";
import tobi from "../../public/tobi.svg";
import blessing from "../../public/blessing.svg";
import busayo from "../../public/busayo.svg";
import chuks from "../../public/chuks.svg";
import xlogo from "../../public/xlogo.svg";
import github from "../../public/github2.svg";

type Contributor = {
  name: string;
  role: string;
  avatar: StaticImageData;
};

const CONTRIBUTORS: Contributor[] = [
  { name: "Theophilus Isah", role: "Contributor", avatar: theo },
  { name: "Camillarhi", role: "Contributor", avatar: cam },
  { name: "nully0x", role: "Contributor", avatar: nully },
  { name: "Afolabi Oluwatobiloba", role: "Contributor", avatar: tobi },
  { name: "Umolo Blessing", role: "Contributor", avatar: blessing },
  { name: "Busayo Dada", role: "Contributor", avatar: busayo },
  { name: "Chuks Agbakuru", role: "Contributor", avatar: chuks },
];

export default function Contributors() {
  return (
    <section id="contributors" className="relative mt-[60px] px-[20px] py-[40px] overflow-hidden scroll-mt-[120px] lg:mt-[5%] lg:px-[5%]">
      <div className="pointer-events-none select-none absolute left-1/2 top-0 -translate-x-1/2 w-full">
        <Image src={bg} alt="background grid" className="lg:hidden" priority />
        <Image src={dsbg} alt="background" priority className="lg:w-full"/>
      </div>

      <div className="relative">
        <p className="text-[40px] font-[500] text-[#101928] lg:text-[72px] lg:font-[600]">Contributors</p>
        <p className="text-[14px] font-[400] text-[#3D3D3D] mt-[8px] lg:text-[20px]">
          The magic fingers behind Nodegaze.
        </p>

        <div className="mt-[28px] grid grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[20px] lg:mt-[50px]">
          {CONTRIBUTORS.map((person) => (
            <div
              key={person.name}
              className=" backdrop-blur-[1px] px-[12px] py-[14px]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-[64px] w-[64px] lg:w-[128px] lg:h-[128px] rounded-full overflow-hidden">
                  <Image src={person.avatar} alt={person.name} width={64} height={64} className="lg:w-[128px] lg:h-[128px]" />
                </div>
                <p className="mt-[10px] text-[12px] lg:text-[20px] font-[500] text-[#0F172A] leading-[16px]">
                  {person.name}
                </p>
                <p className="mt-[2px] text-[10px] lg:text-[16px] font-[400] text-[#6B7280]">
                  {person.role}
                </p>
                <div className="mt-[8px] flex items-center gap-[6px]">
                  <Image src={xlogo} alt="x" width={29} height={28} className="lg:w-[40px] g:h-[40px]" />
                  <Image src={github} alt="github" width={29} height={28} className="lg:w-[40px] g:h-[40px]"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


