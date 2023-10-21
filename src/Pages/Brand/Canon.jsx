import React from "react";
import { FaAngleLeft, FaAngleRight, FaPen, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Canon = () => {
  const products = useLoaderData();

  const imageUrls = [
    "https://asia.canon/media/image/2021/10/20/3c769085ca41470484606735bc867dce_mainheader.jpg",
    "https://asia.canon/media/image/2022/02/08/900709e23fef48b0a438e8f9a58b6b94_ps-zoom-corp-site-banner-v2.jpg",
    "https://asia.canon/media/image/2023/09/15/6e9f2e77d6184ee0ac20cc32561187ad_V10+Corp+Site+Banner.png",
    "https://asia.canon/media/image/2023/02/09/2065ab38e9c64e57847358b2da5f0cdd_R50+banner.jpg",
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
          <h1 className="text-center md:mt-20 mt-10 px-5 mb-10 font-bold text-4xl font-heading">
            Top Products Of Canon
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

export default Canon;
