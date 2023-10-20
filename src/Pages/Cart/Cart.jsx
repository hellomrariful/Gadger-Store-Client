import { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const Cart = () => {
  const { user } = useContext(AuthContext); // Replace with your user context
  const [products, setProducts] = useState([]);
  const userEmail = user?.email;

  useEffect(() => {
    if (userEmail) {
      // Fetch cart data for the logged-in user
      fetch(`http://localhost:5000/cartProducts/${userEmail}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
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
        fetch(`http://localhost:5000/cartProducts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = products.filter((product) => product._id !== id);
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2>Hello, This is your cart</h2>
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="space-y-4">
              <h2>Product: {product.name}</h2>
              <h2>ID: {product._id}</h2>
              <h2>ID: {product.price}</h2>
              <h2>Email: {product.userEmail}</h2>
              <img src={product.photo} alt="" />
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-primaryColor py-3 px-4 rounded"
              >
                Delete Product
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;








// import { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";

// const Cart = () => {
//   const loadedProducts = useLoaderData();
//   const [products, setProducts] = useState(loadedProducts);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [email, setEmail] = useState(""); // Initialize with the email you want to filter by

//   useEffect(() => {
//     // Filter the products by email when the component loads
//     const filtered = products.filter((product) => product.userEmail === email);
//     setFilteredProducts(filtered);
//   }, [products, email]);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/cartProducts/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount > 0) {
//               Swal.fire("Deleted!", "Your file has been deleted.", "success");
//               const remaining = products.filter((product) => product._id !== id);
//               setProducts(remaining);
//             }
//           });
//       }
//     });
//   };

//   return (
//     <div>
//       <h2>Hello, This is cart ({filteredProducts.length})</h2>

//       {/* Input to set the email for filtering */}
//       <input
//         type="text"
//         placeholder="Filter by email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <div>
//         {filteredProducts.map((product) => (
//           <div key={product._id} className=" space-y-4">
//             <h2>hello this is {product.name}</h2>
//             <h2>This is id: {product._id}</h2>
//             <h2>email: {product.userEmail}</h2>
//             <img src={product.photo} alt="" />
//             <button
//               onClick={() => handleDelete(product._id)}
//               className="bg-primaryColor py-3 px-4 rounded"
//             >
//               Delete Product
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;







