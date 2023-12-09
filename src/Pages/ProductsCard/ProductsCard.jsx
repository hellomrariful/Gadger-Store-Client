import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  return (
    <div>
      <div className="text-gray-700 bg-white shadow-md rounded-xl bg-clip-border h-full pt-4 border-t">
        <div className="mx-4 overflow-hidden text-gray-700 bg-backgroundColor rounded-xl bg-clip-border">
          <img src={product.photo} className="mx-auto w-48 h-48" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-black font-semibold font-sans text-lg antialiased leading-relaxed text-blue-gray-900 dark:text-white">
              {product.name}
            </p>
            <p className="text-black font-semibold font-sans text-base antialiased leading-relaxed text-blue-gray-900">
              ${product.price}
            </p>
          </div>
          <div className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {product.description.length > 90 ? (
              <p>
                {product.description.slice(0, 90)}
                <Link
                  to={`/productDetails/${product._id}`}
                  className="text-primaryColor text-[16px]"
                >
                  ... Read More
                </Link>
              </p>
            ) : (
              <p>{product.description}</p>
            )}
          </div>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/productDetails/${product._id}`}>
            <button
              className=" btn bg-primaryColor text-white w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  transition-all hover:scale-105 hover:bg-blue-800 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
