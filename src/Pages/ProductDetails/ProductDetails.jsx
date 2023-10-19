import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const { _id, name, photo } = product;

  const handelAddDatabase = (e) => {
    e.preventDefault();
    console.log(product);

    fetch("http://localhost:5000/cartProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Product Added", "success");
        }
      });
  };

  return (
    <div>
      this is details of ProductDetails: {_id}
      <h1>{name}</h1>
      <img src={photo} alt="" />
      <button
        onClick={handelAddDatabase}
        className=" bg-primaryColor py-4 px-4 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
