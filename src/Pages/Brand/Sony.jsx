
import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaPen,
  FaStar,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Sony = () => {
  const products = useLoaderData();

  const imageUrls = [
    "https://www.apple.com/v/iphone-15-pro/b/images/overview/welcome/hero_endframe__ov6ewwmbhiqq_medium_2x.jpg",
    "https://i.ibb.co/VTswGmg/img-06.jpg",
    "https://i.ibb.co/MC3ryyB/image.png",
    "https://i.ibb.co/MC3ryyB/image.png",
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
        <div className="text-center mt-20 text-red-500  font-bold text-3xl font-heading">Sold Out!! Products Not Available</div>
      ) : (
        <div>
          <h1 className="text-center mt-20 mb-10 font-bold text-3xl font-heading">
        Top Products Of Sony
      </h1>
          <div className="grid lg:grid-cols-2 gap-5">
          {products.map((product) => (
            <div key={product._id}>
              <div className="bg-backgroundColor grid grid-cols-3 items-center h-60 py-4 px-2 w-full">
                <div className="ml-2">
                  <img className="max-h-40" src={product.photo} alt="" />
                </div>

                <div className="-mr-20 ml-2 space-y-1">
                  <h3 className="font-semibold">
                    Name:{" "}
                    <span className="text-descriptionColor">{product.name}</span>
                  </h3>
                  <h3 className="font-semibold">
                    Brand Name:{" "}
                    <span className="text-descriptionColor">{product.brand}</span>
                  </h3>
                  <h3 className="font-semibold">
                    Price:{" "}
                    <span className="text-descriptionColor">${product.price}</span>
                  </h3>
                  <h3 className="font-semibold">
                    Type:{" "}
                    <span className="text-descriptionColor">{product.type}</span>
                  </h3>
                  <p className="flex items-center gap-1">
                    <span>
                      <span className="font-semibold">Rating:</span>{" "}
                      <span className="text-descriptionColor">{product.rating}</span>
                    </span>
                    <span>
                      <FaStar></FaStar>
                    </span>
                  </p>
                </div>

                <div className="space-y-4 ml-20">
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

export default Sony;
