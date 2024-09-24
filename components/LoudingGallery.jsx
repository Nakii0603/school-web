import React, { useState, useEffect } from "react";
import ImgGallery from "./ImgGallery";
import App from "./Loud";
import Loading from "./Loud";

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
          <div className="flex gap-[5px]">
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </div>
          <div className="flex gap-[5px]">
            <Loading />
            <Loading />
            <Loading />
            <Loading />
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
