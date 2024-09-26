"use client";
import Focus from "@/components/Focus";
import Footer from "@/components/Footer";
import LoudingGallery from "@/components/LoudingGallery";
import NavBar from "@/components/NavBar";

export default function page() {
  return (
    <div>
      <NavBar />
      <Focus />
      <LoudingGallery />
      <Footer />
    </div>
  );
}
