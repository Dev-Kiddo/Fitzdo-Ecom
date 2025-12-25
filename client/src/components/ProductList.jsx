import React from "react";
import { Link } from "react-router-dom";
import NotFound from "./ProductsNotFound";
import { useSelector } from "react-redux";

const ProductList = ({ product }) => {
  return (
    <Link to={`product-detail/${product._id}`}>
      <div className="group p-2 m-1 rounded-md duration-300 hover:shadow-md hover:scale-[1.04] cursor-pointer shrink-0">
        <img src="./placeholder.png" alt="product-img" className="rounded-md" />
        <p className="text-sm font-light text-gray-dark mt-1">{product.brand}</p>
        <p className="font-medium text-sm mt-1">{product.title}</p>
        <div className="flex justify-between items-center space-x-1 mt-2 rounded">
          <span className="text-xs font-regular flex items-center gap-0.5">
            <img src="./star.svg" alt="StarIcon" className="w-4 h-4" />
            <img src="./star.svg" alt="StarIcon" className="w-4 h-4" />
            <img src="./star.svg" alt="StarIcon" className="w-4 h-4" />
            <img src="./star.svg" alt="StarIcon" className="w-4 h-4" />
            <img src="./star.svg" alt="StarIcon" className="w-4 h-4" />
            {product.rating}
            <span className="text-xs group-hover:underline hover:text-blue">({product.totalReviews})</span>
          </span>
          <span className="text-white text-xs bg-blue px-2 py-1 ml-2 font-regular rounded-full">-{product.discountPercentage}%</span>
        </div>
        <p className="text-xs font-light mt-1 border-b border-gray-medium pb-2">FREE delivery by Tomorrow 10pm</p>
        <div className="mt-1 flex justify-between">
          <span className="text-sm font-semibold">₹{product.price}</span> <span className="line-through text-sm font-light text-gray-medium">M.R.P: ₹{product.mrp}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductList;
