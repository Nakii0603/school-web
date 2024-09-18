"use client";
import { useState } from "react";
import Logo from "@/public/Logo";

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function jumpingForm() {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSc8qHUhVTu_eo8KngORhaEPBhZ6Mkbhdg6ynzwoHD266jQRkw/closedform",
      "_blank"
    );
  }

  const navItems = [
    { label: "Нүүр", index: 0, url: "/" },
    { label: "Хөтөлбөр", index: 2, url: "pages/program" },
    { label: "Холбоо барих", index: 3, url: "pages/contact" },
  ];

  return (
    <div className="flex text-[#1D4ED8] max-w-[1440px] justify-between mx-auto mt-[20px] font-semibold">
      <div className=" hidden max-md:block">
        <Logo className="w-[130px] " />
      </div>
      <div className="flex items-center gap-10 max-md:hidden">
        <Logo className="w-[130px]" />
        {navItems.map(({ label, index, url }) => (
          <a
            key={index}
            href={url}
            onClick={() => setActiveIndex(index)}
            className={`${
              activeIndex === index ? "underline" : ""
            } transition duration-300`}
          >
            {label}
          </a>
        ))}
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
      <div className="mr-4 max-md:block hidden ">menu</div>
    </div>
  );
}
