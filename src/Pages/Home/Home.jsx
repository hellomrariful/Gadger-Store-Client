import Header from "./Header";
import apple from "../../assets/Apple-6176.png";
import google from "../../assets/Google-4283.png";
import sony from "../../assets/sony.png";
import microsoft from "../../assets/Microsoft-Logo.png";
import samsung from "../../assets/Samsung-4680.png";
import canon from "../../assets/canon.png";
import { Link, useLoaderData } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";

const Home = () => {
  const products = useLoaderData();

  return (
    <div>
      <Header></Header>
      <h1 className="text-center mt-20 font-bold text-3xl font-heading">
        Shop By Brands
      </h1>
      <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 grid-cols-2   items-center mb-20   place-items-center">
        <div>
          <Link to={"/apple"}>
            <img className="w-36 h-fit" src={apple} alt="" />
          </Link>
        </div>
        <div>
          <Link to={"/google"}>
            <img className="w-36 h-fit" src={google} alt="" />
          </Link>
        </div>
        <div>
          <Link to={"/samsung"}>
          <img className="w-36 h-fit md:mt-0 -mt-16" src={samsung} alt="" />
          </Link>
        </div>
        <div>
          <Link to={'/sony'}>
          <img className="w-36 h-fit md:mt-0 -mt-11" src={sony} alt="" />
          </Link>
        </div>
        <div>
          <Link to={"/microsoft"}>
            <img className="w-36 h-fit md:mt-0 -mt-4" src={microsoft} alt="" />
          </Link>
        </div>
        <div className="">
          <Link to={'/canon'}>
          <img  className="w-32 h-fit md:mt-0 -mt-4" src={canon} alt="" />
          </Link>
        </div>
      </div>

      {/* <h2>Total Product: {products.length}</h2> */}

      {/* <div>
        {products.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
