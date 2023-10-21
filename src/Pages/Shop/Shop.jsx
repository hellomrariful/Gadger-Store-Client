import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from '../ProductsCard/ProductsCard';

const Shop = () => {
    const products = useLoaderData();
  const [productsToShow, setProductsToShow] = useState(6);

  const loadMore = () => {
    setProductsToShow(productsToShow + 6);
  };
    return (
        <div>
            <div>
            <h1 className="text-center md:mt-20 mt-14 font-bold text-3xl font-heading mb-10">
        All Products
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.slice(0, productsToShow).map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {products.length > productsToShow && (
          <button
            onClick={loadMore}
            className="bg-primaryColor text-white px-3 py-3 rounded"
          >
            Load More
          </button>
        )}
      </div>
            </div>
        </div>
    );
};

export default Shop;