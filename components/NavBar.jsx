"use client";
import Logo from "@/public/Logo";
import { useState } from "react";
import About from "./About";
import { LoginForm, LoginForm2 } from "./LoginForm";

const menuItems = [
  { id: 1, label: "Нүүр", href: "/" },
  { id: 2, label: "Бидний тухай", href: "/about" },
  { id: 3, label: "Хөтөлбөр", href: "/program" },
  { id: 4, label: "Холбоо барих", href: "/contact" },
];

export default function NavBar(jumpToForm) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" text-[#1D4ED8] relative max-w-[1440px]  mx-auto mt-[20px] font-semibold">
      <div className="flex justify-between w-[100%]">
        <div className="max-xl:gap-8 gap-10 max-lg:gap-2 flex items-center ml-4">
          <Logo />
          <div className="max-xl:gap-8 gap-10 max-lg:gap-2 flex max-md:hidden ">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="menu-link text-[#1D4ED8]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <About setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <LoginForm jumpToForm={jumpToForm} />
        <div className="max-md:flex justify-center flex-col hidden relative">
          <button
            className={`menu-btn mr-4 ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </button>
        </div>
      </div>
      <div className="hidden max-md:flex">
        {isMenuOpen && (
          <div className="max-md:flex flex-col hidden w-[100%]">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="menu-link text-[#1D4ED8] aboutMenu h-10 flex items-center pl-6"
              >
                {item.label}
              </a>
            ))}
            <LoginForm2 jumpToForm={jumpToForm} />
          </div>
        )}
      </div>
    </div>
  );
}
