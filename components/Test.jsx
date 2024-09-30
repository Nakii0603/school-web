"use client";
import { useState } from "react";
import {LoginForm2 } from "./LoginForm";
import About from "./AboutMenu";

const menuItems = [
  { id: 1, label: "Нүүр", href: "/" },
  { id: 3, label: "Хөтөлбөр", href: "/program" },
  { id: 4, label: "Холбоо барих", href: "/contact" },
];

export default function NavBar(jumpToForm) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
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
            <About />
            <LoginForm2 jumpToForm={jumpToForm} />
          </div>
        )}
      </div>
    </div>
  );
}
