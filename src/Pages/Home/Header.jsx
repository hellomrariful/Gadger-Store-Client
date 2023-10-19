import banner from "../../assets/i-phone.webp";
import bannerText from "../../assets/banner-text.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="bg-black md:flex items-center justify-between py-16 rounded-2xl lg:px-10">
        <div className="text-center">
        <img className="" src={bannerText} alt="" />
        </div>
        <img className="h-96 mx-auto" src={banner} alt="I-Phone" />
        <Link className=" md:hidden" to='http://localhost:5173/apple'><button  className="bg-[#D0C3AC] px-4 py-4 mx-auto items-center rounded mt-10 flex">Parches Now $999</button></Link>
      </div>
    </div>
  );
};

export default Header;
