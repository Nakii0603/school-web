"use client";
import { TypeAnimation } from "react-type-animation";

export const Typing = () => {
  return (
    <TypeAnimation
      className="text-[#22AAF5] vt323-regular"
      sequence={[
        "Цөм 1-5 анги",
        3000,
        "EQ + STEAM",
        3000,
        "Англи хэл",
        3000,
        "Солонгос хэл",
        3000,
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: "42px", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
