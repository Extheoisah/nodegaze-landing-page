import Image, { StaticImageData } from "next/image";
import bg from "../../public/contributorbackground.svg";
import dsbg from "../../public/desktophexagon.svg";
import theo from "../../public/theo.svg";
import cam from "../../public/cam.svg";
import nully from "../../public/nully.svg";
import tobi from "../../public/tobi.svg";
import blessing from "../../public/blessing.svg";
import busayo from "../../public/busayo.svg";
import chuks from "../../public/chuks.svg";
import xlogo from "../../public/xlogo.svg";
import github from "../../public/github2.svg";
import Link from "next/link";

type Contributor = {
  name: string;
  role: string;
  avatar: StaticImageData;
  xlink: string;
  githublink: string;
};

const CONTRIBUTORS: Contributor[] = [
  {
    name: "Theophilus Isah",
    role: "Contributor",
    avatar: theo,
    xlink: "https://x.com/extheo",
    githublink: "https://github.com/extheoisah",
  },
  {
    name: "Camillarhi",
    role: "Contributor",
    avatar: cam,
    xlink: "https://x.com/Camilla_rhi",
    githublink: "https://github.com/Camillarhi",
  },
  {
    name: "nully0x",
    role: "Contributor",
    avatar: nully,
    xlink: "https://x.com/nully0x",
    githublink: "https://github.com/nully0x",
  },
  {
    name: "Afolabi Oluwatobiloba",
    role: "Contributor",
    avatar: tobi,
    xlink: "https://x.com/Adeoye_G",
    githublink: "https://www.figma.com/proto/2D6XWjeORbREu4bczeFKO0/Bitcoin-Portfolio?page-id=0%3A1&node-id=87-2809&p=f&viewport=103%2C63%2C0.08&t=VOR4glf8rx3BTGhs-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=87%3A2809&hide-ui=1",
  },
  {
    name: "Umolo Blessing",
    role: "Contributor",
    avatar: blessing,
    xlink: "https://x.com/umolo_johnson",
    githublink: "https://github.com/UmoloBlessing",
  },
  {
    name: "Busayo Dada",
    role: "Contributor",
    avatar: busayo,
    xlink: "https://x.com/BusayoDada_",
    githublink: "https://github.com/busayo-OD",
  },
  {
    name: "Chuks Agbakuru",
    role: "Contributor",
    avatar: chuks,
    xlink: "https://github.com/chuksagbakuru",
    githublink: "https://github.com/chuksagbakuru",
  },
];

export default function Contributors() {
  return (
    <section
      id="contributors"
      className="relative mt-[60px] px-[20px] py-[40px] overflow-hidden scroll-mt-[120px] lg:mt-[5%]"
    >
      <div className="pointer-events-none select-none absolute left-1/2 top-0 -translate-x-1/2 w-full">
        <Image
          src={bg}
          alt="background grid"
          className="w-full h-full lg:hidden"
          priority
        />
        <Image src={dsbg} alt="background" priority className="lg:w-full h-full" />
      </div>

      <div className="relative lg:mx-auto lg:max-w-[1440px] lg:px-[40px]">
        <p className="text-[40px] font-[500] text-[#101928] lg:text-[72px] lg:font-[600]">
          Contributors
        </p>
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
                  <Image
                    src={person.avatar}
                    alt={person.name}
                    width={64}
                    height={64}
                    className="lg:w-[128px] lg:h-[128px]"
                  />
                </div>
                <p className="mt-[10px] text-[12px] lg:text-[20px] font-[500] text-[#0F172A] leading-[16px]">
                  {person.name}
                </p>
                <p className="mt-[2px] text-[10px] lg:text-[16px] font-[400] text-[#6B7280]">
                  {person.role}
                </p>
                <div className="mt-[8px] flex items-center gap-[6px]">
                  <Link
                    href={person.xlink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={xlogo}
                      alt="x"
                      width={29}
                      height={28}
                      className="lg:w-[40px] lg:h-[40px]"
                    />
                  </Link>
                  <Link
                    href={person.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={github}
                      alt="github"
                      width={29}
                      height={28}
                      className="lg:w-[40px] lg:h-[40px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}