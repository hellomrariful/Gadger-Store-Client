import { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import canon from "../../assets/shop.png";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Oval } from "react-loader-spinner";

const Cart = () => {
  const { user } = useContext(AuthContext); // Replace with your user context
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const userEmail = user?.email;

  useEffect(() => {
    if (userEmail) {
      // Fetch cart data for the logged-in user
      fetch(`https://gadger-store-server.vercel.app/cartProducts/${userEmail}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false); // Data loaded
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
          setIsLoading(false); // Data loading failed
        });
    }
  }, [userEmail]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://gadger-store-server.vercel.app/cartProducts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = products.filter(
                (product) => product._id !== id
              );
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div>
        {isLoading ? ( // Loading state check
          <div className="flex justify-center items-center h-screen">
            <Oval
              height={50}
              width={50}
              color=" #FF444A"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#FF444A"
              strokeWidth={4}
              strokeWidthSecondary={2}
            />
          </div>
        ) : products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="space-y-4">
              <div className="gap-10 mt-6">
                <div>
                  <div className="bg-backgroundColor grid grid-cols-3 items-center rounded-lg py-4 px-2 w-full">
                    <div className="ml-2">
                      <img className="max-h-40" src={product.photo} alt="" />
                    </div>

                    <div className="-mr-20 ml-2 space-y-1">
                      <h3 className="font-semibold">
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

                    <div className="space-y-4 ml-20">
                      <div>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="btn text-xl bg-gr text-red-400"
                        >
                          <RiDeleteBin6Line></RiDeleteBin6Line>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          ))
        ) : (
          <div className="grid justify-center items-center place-content-center md:mx-40">
            <div className="lg:mt-40 mx-auto">
              <img className="w-full h-fit" src={canon} alt="" />
            </div>
            <h1 className="text-center text-2xl font-semibold">
              Your cart is currently empty
            </h1>
            <p className="text-center text-lg text-descriptionColor">
              Before proceed to checkout, you must add some products to your
              cart. You will find a lot of interesting products on our "Shop"
              page.
            </p>
            <Link className="text-center" to={"/shop"}>
              <button className="bg-primaryColor py-4 px-3 rounded-lg mt-5 text-white ">
                Return To Shop
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
