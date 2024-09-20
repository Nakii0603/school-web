import Arrow from "@/public/imgJS/Arrow";
import Love from "@/public/imgJS/Love";


export default function Focus() {
  return (
    <div className="flex m-auto max-w-[1440px] mt-[100px] ">
      <div className="flex justify-between gap-3 max-md:flex-col max-md:items-center w-[100%]">
        <div className="flex flex-col items-center max-w-[350px]">
          <img
            className="w-[130px]"
            src="https://nomiinys1-ddb3d4.ingress-haven.ewp.live/wp-content/uploads/2024/05/eye.webp"
            alt=""
          />
          <h3 className="text-[32px] max-md:text-[24px] ">АЛСЫН ХАРАА</h3>
          <p className="text-center">
            Гадаад хэлэнд суурилсан бүрэн дунд боловсролтой, дэлхийд өрсөлдөх
            чадвартай иргэн бэлтгэх боловсролын байгууллага болно
          </p>
        </div>
        <div className="flex flex-col items-center max-w-[350px]">
          <Arrow />
          <h3 className="text-[32px] max-md:text-[24px] "> ЗОРИЛГО</h3>
          <p className="text-center">
            Сургуулийн зөв бодлого төлөвлөлтөөр хүүхэд нэг бүрийг хөгжүүлэх үйл
            ажиллагааны хүрээнд мэргэшсэн багш, хамт олноор дамжуулан эцэг
            эхчүүдэд нээлттэйгээр, эх орондоо хайртай, хүнлэг энэрэнгүй, амьдрах
            чадвартай, оюунлаг, эрүүл чийрэг, авьяаслаг, зөв иргэнийг
            төлөвшүүлэх
          </p>
        </div>
        <div className="flex flex-col items-center max-w-[350px]">
          <Love />
          <h3 className="text-[32px] max-md:text-[24px] ">ЭРХЭМ ЧАНАР</h3>
          <p className="text-center">
            Боловсрол олгох нь сэтгэлээсээ хийх үйл юм
          </p>
        </div>
      </div>
    </div>
  );
}
