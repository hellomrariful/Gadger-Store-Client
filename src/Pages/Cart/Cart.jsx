import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = () => {
  const loadedProducts = useLoaderData();
  console.log(loadedProducts);
  const [products, setProducts] = useState(loadedProducts);



  // const handelDelete = id =>{
  //   console.log(id);
  //   fetch(`http://localhost:5000/cartProducts/${id}`, {
  //     method: "DELETE"
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     if(data.deletedCount == 0){
  //       console.log('deleted successfully');
  //       const remaining = products.filter(product => product._id !== id)
  //       setProducts(remaining)
  //     }
  //   })
  // }


  const handelDelete = (id) => {
    console.log(id);
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
            // console.log(data.deletedCount);
            if (data.deletedCount > 0) {
            //   console.log("products deleted");

              Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
      <h2>Hello, This is cart {loadedProducts.length}</h2>
      <div>
        {products.map((product) => (
          <div key={product._id} className=" space-y-4">
            <h2>hello this is {product.name}</h2>
            <h2>This is id: {product._id}</h2>
            <button
              onClick={() => handelDelete(product._id)}
              className=" bg-primaryColor py-3 px-4 rounded"
            >
              Delete Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
