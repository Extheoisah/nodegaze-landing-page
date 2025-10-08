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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ids = NAV_ITEMS.map((it) => it.href.replace("#", ""));

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const hashId = window.location.hash.replace("#", "") || "home";
    const initialEl = document.getElementById(hashId);
    if (initialEl) setActiveSection(initialEl.id);

    return () => {
      observer.disconnect();
    };
  }, []);

  const idFromHref = (href: string) => href.replace("#", "");

  return (
    <>
      <header className="fixed top-[50px] z-40 bg-white/20 backdrop-blur supports-[backdrop-filter]:bg-white/20 w-full px-[20px] lg:px-[40px] lg:w-[1440px] lg:mx-auto left-0 right-0">
        <div className="rounded-[50px] border border-[#b0b4b8] lg:h-[80px] lg:flex lg:items-center lg:justify-between lg:w-full mx-auto w-full max-w-[1440px]">
          <div className="mx-auto lg:hidden flex h-16 w-full max-w-screen-sm items-center justify-between px-4">
            <a
              href="#home"
              aria-label="Nodegaze home"
              onClick={() => setActiveSection("home")}
              className="inline-flex items-center gap-2"
            >
              <Image src={logo} alt="logo" className="lg:w-[100px]" />
            </a>
            <Image
              onClick={() => setIsOpen(true)}
              src={menu}
              alt="menu"
              className="lg:hidden cursor-pointer"
            />
          </div>

          <div className="hidden lg:flex w-full items-center justify-between px-[30px]">
            <a
              href="#home"
              aria-label="Nodegaze home"
              onClick={() => setActiveSection("home")}
              className="inline-flex items-center gap-2"
            >
              <Image src={logo} alt="logo" className="w-[150px]" />
            </a>

            <nav className="flex items-center gap-[50px]">
              {NAV_ITEMS.map((item) => {
                const id = idFromHref(item.href);
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveSection(id)}
                    className={`text-[18px] tracking-tight lg:font-[700] transition-colors ${
                      isActive
                        ? "text-[#2151f5] font-[700]"
                        : "text-[#1f2a44]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <a
              href="https://github.com/extheoisah/nodegaze"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2151f5] px-6 text-white active:translate-y-[2px] active:shadow-[0_4px_0_#1737a5]"
            >
              <Image src={github} alt="github" className="w-[20px] h-[20px]" />
              <span className="text-[16px] font-semibold">Check Github</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 h-[50vh]">
          <div className="absolute inset-0 bg-white">
            <div className="mx-auto flex h-16 w-full max-w-screen-sm items-center justify-end px-4">
              <Image
                onClick={() => setIsOpen(false)}
                src={cancel}
                alt="cancel"
                className="cursor-pointer"
              />
            </div>

            <nav className="mx-auto flex max-w-screen-sm flex-col items-center gap-10 px-4 pt-8">
              {NAV_ITEMS.map((item) => {
                const id = idFromHref(item.href);
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveSection(id);
                    }}
                    className={`text-[20px] font-medium tracking-tight transition-colors ${
                      isActive ? "text-[#2151f5]" : "text-[#1f2a44]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <a
                href="https://github.com/extheoisah/nodegaze"
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
      )}
    </>
  );
}
