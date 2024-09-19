import { useState } from "react";

export default function About() {
  const menuItemsBar = [
    { name: "Танилцуулга", href: "/" },
    { name: "Мэндчилгээ", href: "/" },
    { name: "Бидний амжилт", href: "/" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex items-center gap-3 relative max-md:hidden"
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
          {menuItemsBar.map((item, index) => (
            <a
              key={index}
              className="aboutMenu rounded-md w-[130px] text-black h-[50px] flex justify-center items-center"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
