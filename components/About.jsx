import { useRouter } from "next/navigation";
import { useState } from "react";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuItemsBar = [
    { name: "Танилцуулга", href: "/introduction" },
    { name: "Мэндчилгээ", href: "/greetings" },
    { name: "Бидний амжилт", href: "/ourSuccess" },
  ];
  const jumpAbout = () => {
    router.push("/about");
  };

  return (
    <div
      className="flex items-center gap-3 relative max-md:hidden"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-3">
        <a
          onClick={jumpAbout}
          className={`hover:bg-white cursor-pointer ${isOpen ? "bg-white" : ""}`}
        >
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
