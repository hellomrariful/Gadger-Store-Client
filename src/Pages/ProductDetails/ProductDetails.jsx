import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  const { user } = useContext(AuthContext);

  // console.log(product._id, product.name, product.price);

  const dataSend = {
    productId: product._id,
    userEmail: user.email,
    name: product.name,
    photo: product.photo,
    price: product.price,
  };
  console.log(dataSend);

  const handelAddDatabase = (e) => {
    e.preventDefault();

    fetch("https://gadger-store-server.vercel.app/cartProducts")
      .then((res) => res.json())
      .then((cartProducts) => {
        const isDuplicate = cartProducts.some(
          (cartProduct) => cartProduct._id === product._id
        );

        if (isDuplicate) {
          Swal.fire("Oops!", "Product already added to the cart.", "error");
        } else {
          fetch("https://gadger-store-server.vercel.app/cartProducts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(dataSend),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire("Good job!", "Product Added", "success");
              }
            });
        }
      });
  };

  return (
    <div className="md:grid grid-cols-2 lg:mt-40 mt-20 gap-10">
      <div className="bg-backgroundColor rounded-xl py-5">
        <img className=" w-1/2 mx-auto" src={product.photo} alt="" />
      </div>
      <div className=" w-full mt-10 md:mt-0">
        <h1 className=" text-descriptionColor font-bold text-xl mb-1">
          {product.type}
        </h1>
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <h1 className="text-descriptionColor text-lg mb-4">
          {product.description}
        </h1>
        <div className=" grid grid-cols-2 mb-5 items-center">
          <h1 className=" text-primaryColor  text-xl font-semibold ">
            ${product.price} USD
          </h1>

          <div className=" items-center justify-end flex ">
            <h1 className=" text-descriptionColor font-bold text-2xl">
              {product.rating}{" "}
            </h1>
            <span className=" text-orange-300 text-xl mb-3">
              <FaStar></FaStar>
            </span>
          </div>
        </div>

        <button
          onClick={handelAddDatabase}
          className="btn btn-block bg-primaryColor py-4 px-4 rounded-lg text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;