import Foot from "@/components/Foot";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function page() {
  return (
    <div className="max-w-[1440px] m-auto">
      <NavBar />
      <Footer />
      <Foot />
    </div>
  );
}
