"use client";
import Logo from "@/public/Logo";
import { useState } from "react";
import LoginForm from "./LoginForm";

const MenuItems = () => (
  <>
    <a href="#">Нүүр</a>
    <a href="">Бидний тухай</a>
    <a href="">Хөтөлбөр</a>
    <a href="">Холбоо барих</a>
  </>
);
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function jumpingForm() {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSc8qHUhVTu_eo8KngORhaEPBhZ6Mkbhdg6ynzwoHD266jQRkw/closedform",
      "_blank"
    );
  }

  return (
    <div className="flex text-[#1D4ED8] relative max-w-[1440px] justify-between mx-auto mt-[20px] font-semibold">
      <div className=" hidden max-md:block">
        <Logo />
      </div>
      <div className="flex items-center max-xl:gap-8 gap-10 max-lg:gap-2 max-md:hidden">
        <Logo />
        <MenuItems />
        <div
          className="flex items-center gap-3 relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex items-center gap-3">
            <a href="" className={`hover:bg-white ${isOpen ? "bg-white" : ""}`}>
              Бидний тухай
            </a>
            <span className="triangle mt-[5px]"></span>
          </div>

          {isOpen && (
            <div className="bg-[#dfdfdf5b] rounded-md flex flex-col absolute mt-[170px]">
              <a
                className="aboutMenu rounded-md w-[130px] text-black h-[50px] flex justify-center items-center"
                href=""
              >
                Танилцуулга
              </a>
              <a
                className="aboutMenu rounded-md w-[130px] text-black h-[50px] flex justify-center items-center"
                href=""
              >
                Мэндчилгээ
              </a>
              <a
                className="aboutMenu rounded-md w-[130px] text-black h-[50px] flex justify-center items-center"
                href=""
              >
                Бидний амжилт
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <div
          onClick={jumpingForm}
          className="bg-[#1D4ED8] flex items-center max-md:hidden mr-4 h-[40px] text-white border-box p-[6px] rounded-lg cursor-pointer"
        >
          Бүртгүүлэх
        </div>
      </div>

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
      <div
        className={`text-black absolute  top-16  flex-col ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <MenuItems />
      </div>
    </div>
  );
}
