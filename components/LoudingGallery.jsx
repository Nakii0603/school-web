import React, { useState, useEffect } from "react";
import ImgGallery from "./ImgGallery";
import Loading from "./Loud";

export default function LoadingGallery() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const loadingItems = Array.from({ length: 2 });

  return (
    <div className="flex justify-center">
      {loading ? (
        <div className="flex flex-col gap-[5px] ">
          {loadingItems.map((_, index) => (
            <div className=" flex gap-2" key={index}>
              <div className="flex gap-2 max-md:flex-col">
                <Loading />
                <Loading />
              </div>
              <div className="flex gap-2 max-md:flex-col">
                <Loading />
                <Loading />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <ImgGallery />
        </div>
      )}
    </div>
  );
}
