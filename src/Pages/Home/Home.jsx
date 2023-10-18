import Header from "./Header";
import apple from "../../assets/Apple-6176.png";
import google from "../../assets/Google-4283.png";
import huawei from "../../assets/Huawei-3570.png";
import oneplus from "../../assets/Oneplus-9091.png";
import samsung from "../../assets/Samsung-4680.png";
import xiaomi from "../../assets/Xiaomi-1934.png";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1 className=" text-center mt-20 text-3xl">Shop By Brands</h1>
            <div className="grid grid-cols-6 gap-10 px-20">
                <div><img src={apple} alt="" /></div>
                <div><img src={google} alt="" /></div>
                <div><img src={samsung} alt="" /></div>
                <div><img src={huawei} alt="" /></div>
                <div><img src={oneplus} alt="" /></div>
                <div><img src={xiaomi} alt="" /></div>
            </div>
        </div>
    );
};

export default Home;