import { Link, useLoaderData } from "react-router-dom";

const Microsoft = () => {
  const products = useLoaderData();
  console.log(products.length);
  if (products.length == 0) {
    alert("apnar product nei eikane");
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <p>hello{product._id}</p>
          <p>hello{product.brand}</p>
          <img src={product.photo} alt="" />
          <Link to={`/productDetails/${product._id}`}>
            <button className=" bg-red-400 py-3 px-5">Details</button>
          </Link>
          <br />
          <br />
          <Link to={`/updateProduct/${product._id}`}>
            <button className=" bg-red-400 py-3 px-5">Update</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Microsoft;
