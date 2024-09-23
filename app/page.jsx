"use client";
import Focus from "@/components/Focus";
import ImgGallery from "@/components/ImgGallery";
import LoudingGallery from "@/components/LoudingGallery";
import NavBar from "@/components/NavBar";

export default function page() {
  return (
    <div>
      <NavBar />
      <Focus />
      <LoudingGallery />
    </div>
  );
}
