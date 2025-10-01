"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import menu from "../../public/menu.svg";
import cancel from "../../public/cancel.svg";
import github from "../../public/github.svg";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "The Product", href: "#product" },
  { label: "Contributors", href: "#contributors" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-[50px] z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 w-full px-[20px] lg:px-[40px]">
        <div className="rounded-[50px] border-[#b0b4b8] border-[1px] lg:h-[100px] lg:flex lg:items-center lg:justify-between lg:w-full">
          <div className="mx-auto lg:hidden flex h-16 w-full max-w-screen-sm items-center justify-between px-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2"
              aria-label="Nodegaze home"
            >
              <Image src={logo} alt="logo" className="lg:w-[200px]"/>
            </a>
            <Image onClick={() => setIsOpen(true)} src={menu} alt="menu" className="lg:hidden"/>
          </div>

          <div className="hidden lg:flex w-full items-center justify-between px-[50px]">
            <a href="#home" className="inline-flex items-center gap-2" aria-label="Nodegaze home">
              <Image src={logo} alt="logo" className="w-[250px]"/>
            </a>

            <nav className="flex items-center gap-[100px]">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-[28px] lg:font-[700] tracking-tight ${item.label === "Home" ? "text-[#2151f5] font-[700]" : "text-[#1f2a44]"}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-16 items-center justify-center gap-2 rounded-full bg-[#2151f5] px-6 text-white active:translate-y-[2px] active:shadow-[0_4px_0_#1737a5]"
            >
              <Image src={github} alt="github"  className="w-[35px]"/>
              <span className="text-[25px] font-semibold">Check Github</span>
            </a>
          </div>
        </div>
      </header>

      {isOpen ? (
        <div className="fixed h-[50%] inset-0 z-50 bg-black/60">
          <div className="absolute inset-0 bg-white">
            <div className="mx-auto flex h-16 w-full max-w-screen-sm items-center justify-end px-4">
              <Image
                onClick={() => setIsOpen(false)}
                src={cancel}
                alt="cancel"
              />
            </div>

            <nav className="mx-auto flex max-w-screen-sm flex-col items-center gap-10 px-4 pt-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[20px] font-medium tracking-tight text-[#1f2a44]"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2151f5] px-6 text-white active:translate-y-[2px] active:shadow-[0_4px_0_#1737a5]"
              >
                <Image src={github} alt="github" />
                <span className="text-[15px] font-semibold">Check Github</span>
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
