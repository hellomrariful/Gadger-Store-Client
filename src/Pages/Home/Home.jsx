import Header from "./Header";
import apple from "../../assets/Apple-6176.png";
import google from "../../assets/Google-4283.png";
import huawei from "../../assets/Huawei-3570.png";
import oneplus from "../../assets/Oneplus-9091.png";
import samsung from "../../assets/Samsung-4680.png";
import xiaomi from "../../assets/Xiaomi-1934.png";
import { Link, useLoaderData } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";

const Home = () => {
  const products = useLoaderData();

  return (
    <div>
      <Header></Header>
      <h1 className=" text-center mt-20 text-3xl">Shop By Brands</h1>
      <div className="grid grid-cols-6 gap-10 px-20">
        <div>
          <Link to={"/apple"}>
            <img src={apple} alt="" />
          </Link>
        </div>
        <div>
          <Link to={"/google"}>
            <img src={google} alt="" />
          </Link>
        </div>
        <div>
          <img src={samsung} alt="" />
        </div>
        <div>
          <img src={huawei} alt="" />
        </div>
        <div>
          <img src={oneplus} alt="" />
        </div>
        <div>
        <Link to={"/microsoft"}>
        <img src={xiaomi} alt="" />
          </Link>
          
        </div>
      </div>

      <h2>Total Product: {products.length}</h2>

      <div>
        {products.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
