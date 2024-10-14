"use client";
import Focus from "@/components/Focus";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import LoudingGallery from "@/components/LoudingGallery";
import Foot from "@/components/Foot";

export default function page() {
  return (
    <div>
      <NavBar />
      <Focus />
      <LoudingGallery />
      <Footer />
      <Foot />
    </div>
  );
}
