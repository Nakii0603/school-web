import React from "react";
import Gallery1 from "@/public/imgJS/Gallery1";

export default function ImgGallery() {
  return (
    <div className="m-auto max-w-[1440px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          className="fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <Gallery1 className="w-full" />
        </div>
      ))}
    </div>
  );
}
