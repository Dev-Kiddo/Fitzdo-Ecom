import React from "react";

const ProductsNotFound = ({ message }) => {
  return (
    <div className="text-center">
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-blue ">404</h1>
      <h1 className="text-3xl font-semibold tracking-tight text-primary ">Oops! No Products Found</h1>
      <p className="text-gray-medium">{message || "We couldn't find any products matching your criteria."}</p>
    </div>
  );
};

export default ProductsNotFound;
