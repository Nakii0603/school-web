import { Typing } from "@/components/Type";
import Foot from "@/components/Foot";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Program1 from "@/public/imgJS/program1";
import Program2 from "@/public/imgJS/Program2";
import Program3 from "@/public/imgJS/Program3";

export default function page() {
  return (
    <div className="m-auto">
      <NavBar />
      <div className="w-[100%] h-[300px] bg-[#333333ab] flex items-center font-semibold justify-center gap-4 mt-[30px] text-[42px]">
        <p>Манайд</p>
        <Typing />
        <p>хөтөлбөр</p>
      </div>
      <div className="flex mt-[30px] w-[100%] gap-10 max-md:flex-wrap justify-center">
        <div className="w-[330px]">
          <Program1 className="w-[330px]" />
          <p className="text-[28px]">Бага анги I-V</p>
          <p>
            I-V ангидаа цөм хөтөлбөр +Математик гүнзгий II-V ангидаа цөм
            хөтөлбөр + Солонгос хэл + Англи хэл Мэдээллийн технологи, EQ + STEAM
            Нэмэлтээр спорт өрөлт, даам, шатар
          </p>
        </div>
        <div className="w-[330px]">
          <Program2 className="w-[330px]" />
          <p className="text-[28px]">Дунд болон Ахлах анги VI-XII</p>
          <p>
            VI-XII ангидаа цөм хөтөлбөр + Математик гүнзгий II-V ангидаа цөм
            хөтөлбөр + Солонгос хэл + Англи хэл Мэдээллийн технологи, EQ + STEAM
            IQ, GLOBE, олон улсын шалгалт/CIE, IGCSE, A, AS, IB/ Илтгэх урлаг,
            Мэтгэлцэх урлаг SOFT SKILLS
          </p>
        </div>
        <div className="w-[330px]">
          <Program3 className="w-[330px]" />
          <p className="text-[28px]">СӨБ-ын цогцолбор</p>
          <p>
            Сургуулийн өмнөх боловсрол солонгос улсын хүүхэд төвтэй сургах
            хөтөлбөр
          </p>
        </div>
      </div>
      <Footer />
      <Foot />
    </div>
  );
}
