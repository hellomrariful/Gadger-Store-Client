import banner from "../../assets/i-phone.webp";
import bannerText from "../../assets/banner-text.png";

const Header = () => {
  return (
    <div className="">
      <div className="bg-black flex items-center justify-between py-16 rounded-2xl lg:px-10">
        <div className="text-center">
        <img className="" src={bannerText} alt="" />
        {/* <button className="bg-primaryColor px-4 py-4">Parches Now $100</button> */}
        </div>
        <img className=" h-96 " src={banner} alt="I-Phone" />
      </div>
    </div>
  );
};

export default Header;
