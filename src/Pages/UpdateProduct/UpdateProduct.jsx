import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const products = useLoaderData();

  const { name, brand, _id, photo } = products;

  console.log(products);

  return (
    <div>
      this is update for {_id}
      <h2>name: {name}</h2>
      <h2>name: {brand}</h2>
      <img src={photo} alt="" />
    </div>
  );
};

export default UpdateProduct;

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// const UpdateProduct = () => {
//     const { id } = useParams();

//     const [product, setProduct] = useState(null);
//     console.log(product);

//     // Fetch data for the specific ID when the component mounts
//     useEffect(() => {
//         fetch(`http://localhost:5000/products/id/${id}`)
//             .then((response) => response.json())
//             .then((data) => setProduct(data))
//             .catch((error) => console.error("Error fetching data:", error));
//     }, [id]);

//     return (
//         <div>
//             {product ? (
//                 <div>
//                     {/* Render your update form or content here */}
//                     <h2>Update Product</h2>
//                     <p>Product Name: {product.name}</p>
//                     <h2>{product.photo}</h2>
//                     <h2>{product._id}</h2>

//                     {/* Add more product details as needed */}
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default UpdateProduct;
