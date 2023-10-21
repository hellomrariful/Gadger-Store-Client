import React from "react";
import { FaAngleLeft, FaAngleRight, FaPen, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Samsung = () => {
  const products = useLoaderData();

  const imageUrls = [
    "https://images.samsung.com/is/image/samsung/assets/au/2307/pfs/03-hd01-Q5-kv-pc-1440x640_default.jpg?imwidth=1366",
    "https://images.samsung.com/is/image/samsung/assets/bd/2307/home/Watch_Home_mainKV_pc_1440x640.jpg?imwidth=1536",
    "https://mobileworld.com.vn/uploads/news/10_2022/ss1-815.png",
    "https://stcv4.hnammobile.com/downloads/d/samsung-galaxy-s22-series-10-meo-va-thu-thuat-thu-vi-de-tan-dung-toi-da-chiec-flagship-dau-bang-01647238216.jpg",
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatic slide change every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2800);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <div>
      <div>
        <div
          id="gallery"
          className="relative w-full mt-10 "
          data-carousel="slide"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {imageUrls.map((imageUrl, index) => (
              <div
                key={index}
                className={`${
                  activeIndex === index ? "block" : "hidden"
                } duration-700 ease-in-out`}
                data-carousel-item={activeIndex === index ? "active" : null}
              >
                <img
                  src={imageUrl}
                  className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-black text-3xl"
            data-carousel-pre
            onClick={prevImage}
          >
            <FaAngleLeft></FaAngleLeft>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-3xl"
            data-carousel-next
            onClick={nextImage}
          >
            <FaAngleRight></FaAngleRight>
          </button>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="text-center mt-20 text-red-500  font-bold text-3xl font-heading">
          Sold Out!! Products Not Available
        </div>
      ) : (
        <div>
          <h1 className="text-center md:mt-20 mt-10 px-5 mb-10 font-bold text-3xl font-heading">
            Top Products Of Samsung
          </h1>
          <div className="grid md:grid-cols-2 gap-5">
            {products.map((product) => (
              <div key={product._id}>
                <div className="bg-backgroundColor grid grid-cols-3 items-center h-60 py-4 px-2 w-full">
                  <div className="ml-2">
                    <img className="max-h-40" src={product.photo} alt="" />
                  </div>

                  <div className="-mr-20 ml-2 space-y-1">
                    <h3 className="font-semibold">
                      Name:{" "}
                      <span className="text-descriptionColor">
                        {product.name}
                      </span>
                    </h3>
                    <h3 className="font-semibold">
                      Brand Name:{" "}
                      <span className="text-descriptionColor">
                        {product.brand}
                      </span>
                    </h3>
                    <h3 className="font-semibold">
                      Price:{" "}
                      <span className="text-descriptionColor">
                        ${product.price}
                      </span>
                    </h3>
                    <h3 className="font-semibold">
                      Type:{" "}
                      <span className="text-descriptionColor">
                        {product.type}
                      </span>
                    </h3>
                    <p className="flex items-center gap-1">
                      <span>
                        <span className="font-semibold">Rating:</span>{" "}
                        <span className="text-descriptionColor">
                          {product.rating}
                        </span>
                      </span>
                      <span>
                        <FaStar></FaStar>
                      </span>
                    </p>
                  </div>

                  <div className="space-y-4 ml-16">
                    <div>
                      <Link to={`/productDetails/${product._id}`}>
                        <button className="btn bg-primaryColor text-white">
                          <FaEye></FaEye>
                        </button>
                      </Link>
                    </div>
                    <div>
                      <Link to={`/updateProduct/${product._id}`}>
                        <button className="btn bg-primaryColor text-white">
                          <FaPen></FaPen>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Samsung;
