function LoginForm() {
  const jumpToForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSc8qHUhVTu_eo8KngORhaEPBhZ6Mkbhdg6ynzwoHD266jQRkw/closedform",
      "_blank"
    );
  };
  return (
    <div className="flex items-center">
      <div
        onClick={jumpToForm}
        className="bg-[#1D4ED8] flex items-center max-md:hidden mr-4 h-[40px] text-white border-box p-[6px] rounded-lg cursor-pointer"
      >
        Бүртгүүлэх
      </div>
    </div>
  );
}
function LoginForm2() {
  const jumpToForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSc8qHUhVTu_eo8KngORhaEPBhZ6Mkbhdg6ynzwoHD266jQRkw/closedform",
      "_blank"
    );
  };
  return (
    <div className="flex items-center">
      <div
        onClick={jumpToForm}
        className="bg-[#1D4ED8] flex items-center ml-6 h-[40px] text-white border-box p-[6px] rounded-lg cursor-pointer"
      >
        Бүртгүүлэх
      </div>
    </div>
  );
}
export {LoginForm, LoginForm2}