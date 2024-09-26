import Map from "@/components/Map";
import Fb from "@/public/imgJS/Fb";
import Foot from "@/components/Foot";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import House from "@/public/imgJS/House";

export default function page() {
  return (
    <div className="max-w-[1440px] m-auto">
      <NavBar />
      <div className="max-w-[1140px] m-auto max-md:mx-[20px]">
        <h1 className="text-[32px] my-5">ХОЛБОО БАРИХ МЭДЭЭЛЭЛ</h1>
        <div className="flex gap-8 max-md:flex-wrap">
          <div className="w-[100%] flex flex-col gap-3">
            <Fb />
            <p>Хаяг: СХД, 34-хороо, баянголын ам C-8 18180</p>
            <p>Утас: 99662457</p>
            <p>Цахим шуудан: sukheeamarbat@gmail.com</p>
          </div>
          <div className="flex flex-col gap-5">
            <House />
            <p className="text-[32px]">Манай сургууль бидний бахархал</p>
            <p>
              Аз жаргалын тангараг Жаргалтай байгаарай Шинэ сэтгэлтэй залуучууд
              аа! Дэлхийг шинэ болго. Жаргалтай байгаарай Гэрэлтсэн нүдтэй
              залуучууд аа! Дарууг сахиарай. Жаргалтай байгаарай Хүчтэй гартай
              залуучууд аа! Шударга ёс ба энх тайвныг байгуулаарай. Жаргалтай
              байгаарай Үнэнээр цангасан залуучууд аа! Үнэнийг чиглэн
              урагшлаарай. Жаргалтай байгаарай Уйтгар ба уналтыг давахаар
              хичээдэг залуучууд аа! Тэмүүллийн эш үзүүлэгч болоорой. Жаргалтай
              байгаарай Амийг хүндэлдэг залуучууд аа! Амийн соёлын гол дүр
              болоорой. Жаргалтай байгаарай Залуу гэх ганц шалтгаанаар
              хайрлуулдаг залуус аа Нөхөрлөл ба баяр хөөрийг дамжуулаарай. –
              E.Vigano- Залуу гэх ганц шалтгаанаар би та нарыг хайрладаг Дон
              Боско.
            </p>
            <Map />
          </div>
        </div>
      </div>
      <Footer />
      <Foot />
    </div>
  );
}
