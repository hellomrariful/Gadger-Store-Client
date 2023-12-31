import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();

  const { _id, name, description, rating, photo, price, type } = product;

  console.log(_id);

  console.log("this is id", _id);

  console.log(product);

  const handelAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const updatedProduct = {
      name,
      brand,
      price,
      type,
      rating,
      photo,
      description,
    };
    console.log(updatedProduct);

    // send data to server
    fetch(`https://gadger-store-server.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "Product Update", "success");
        }
      });
  };

  return (
    <div>
      <h2 className="text-center lg:mt-20 font-bold text-4xl font-heading lg:mb-14 mt-14 mb-10 px-4">
      Update {name}
      </h2>
      <div className=" bg-backgroundColor lg:px-40 md:px-16 px-8 md:mx-10 pt-14 pb-10">
        <form onSubmit={handelAddProduct}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Product name"
                required
                defaultValue={name}
              />
            </div>

            <div>
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Brand
              </label>
              <select
                id="brand"
                name="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
               
              >
                <option value="">Select a brand</option>
                <option value="Apple">Apple</option>
                <option value="Google">Google</option>
                <option value="Samsung">Samsung</option>
                <option value="Sony">Sony</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Canon">Canon</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                name="price"
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Product Price"
                required
                defaultValue={price}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Type
              </label>
              <input
                name="type"
                type="text"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Product Type"
                required
                defaultValue={type}
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rating
              </label>
              <input
                name="rating"
                type="text"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Product Rating"
                required
                defaultValue={rating}
              />
            </div>
            <div>
              <label
                htmlFor="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Photo
              </label>
              <input
                name="photo"
                type="url"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter photo URL"
                required
                defaultValue={photo}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Short Description
            </label>
            <input
              name="description"
              type="text"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Product description"
              required
              defaultValue={description}
            />
          </div>

          <input
            className="bg-primaryColor w-full py-3 rounded-lg cursor-pointer text-white uppercase text-sm font-semibold"
            type="submit"
            value="Update Product"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
