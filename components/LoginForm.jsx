export default function LoginForm(jumpingForm) {
  return (
    <div className="flex items-center">
      <div
        onClick={jumpingForm}
        className="bg-[#1D4ED8] flex items-center max-md:hidden mr-4 h-[40px] text-white border-box p-[6px] rounded-lg cursor-pointer"
      >
        Бүртгүүлэх
      </div>
    </div>
  );
}
