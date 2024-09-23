import React from "react";
import Gallery1 from "@/public/imgJS/Gallery1";
import Gallery2 from "@/public/imgJS/Gallery2";
import Gallery3 from "@/public/imgJS/Gallery3";
import Gallery4 from "@/public/imgJS/Gallery4";
import Gallery5 from "@/public/imgJS/Gallery5";
import Gallery6 from "@/public/imgJS/Gallery6";
import Gallery7 from "@/public/imgJS/Gallery7";
import Gallery8 from "@/public/imgJS/Gallery8";
import Gallery9 from "@/public/imgJS/Gallery9";
import Gallery10 from "@/public/imgJS/Gallery10";
import Gallery11 from "@/public/imgJS/Gallery11";
import Gallery12 from "@/public/imgJS/Gallery12";
import Gallery13 from "@/public/imgJS/Gallery13";
import Gallery14 from "@/public/imgJS/Gallery14";
import Gallery15 from "@/public/imgJS/Gallery15";
import Gallery16 from "@/public/imgJS/Gallery16";
import Gallery17 from "@/public/imgJS/Gallery17";
import Gallery18 from "@/public/imgJS/Gallery18";
import Gallery19 from "@/public/imgJS/Gallery19";
import Gallery20 from "@/public/imgJS/Gallery20";
import Gallery21 from "@/public/imgJS/Gallery21";
import Gallery22 from "@/public/imgJS/Gallery22";
import Gallery23 from "@/public/imgJS/Gallery23";
import Gallery24 from "@/public/imgJS/Gallery24";

export default function ImgGallery() {
  return (
    <div className="max-w-[1440px] m-auto mt-[100px]">
      <div className="flex h-[2470px] gap-[5px]">
        <div className="flex max-md:flex-wrap items-start gap-[5px]">
          <div className="test">
            <Gallery1 className="w-full" />
            <Gallery2 className="w-full" />
            <Gallery3 className="w-full" />
            <Gallery4 className="w-full" />
            <Gallery5 className="w-full" />
            <Gallery6 className="w-full" />
          </div>
          <div className="test">
            <Gallery7 className="w-full" />
            <Gallery8 className="w-full" />
            <Gallery9 className="w-full" />
            <Gallery10 className="w-full" />
            <Gallery11 className="w-full" />
            <Gallery12 className="w-full" />
          </div>
        </div>
        <div className="flex max-md:flex-wrap gap-[5px]">
          <div className="test">
            <Gallery13 className="w-full" />
            <Gallery14 className="w-full" />
            <Gallery15 className="w-full" />
            <Gallery16 className="w-full" />
            <Gallery17 className="w-full" />
            <Gallery18 className="w-full" />
          </div>
          <div className="test">
            <Gallery19 className="w-full" />
            <Gallery20 className="w-full" />
            <Gallery21 className="w-full" />
            <Gallery22 className="w-full" />
            <Gallery23 className="w-full" />
            <Gallery24 className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
