import React, { useState, useEffect } from "react";
import Louding from "../public/imgJS/LoudingImg";
import ImgGallery from "./ImgGallery";

export default function LoudingGallery() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center">
      {loading ? (
        <div className="flex flex-col gap-[5px]">
          <div className="flex gap-[5px] ">
            <Louding />
            <Louding />
            <Louding />
            <Louding />
          </div>
          <div className="flex gap-[5px] ">
            <Louding />
            <Louding />
            <Louding />
            <Louding />
          </div>
          <div className="flex gap-[5px] ">
            <Louding />
            <Louding />
            <Louding />
            <Louding />
          </div>
          <div className="flex gap-[5px] ">
            <Louding />
            <Louding />
            <Louding />
            <Louding />
          </div>
        </div>
      ) : (
        <div>
          <ImgGallery />
        </div>
      )}
    </div>
  );
}
