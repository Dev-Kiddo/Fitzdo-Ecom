import React, { useEffect } from "react";
import ProductList from "./ProductList";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/productSlice";

const Products = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  console.log("products:", products);

  useEffect(
    function () {
      dispatch(fetchProducts());
    },
    [dispatch]
  );

  return (
    <section>
      <div className="grid grid-cols-4 gap-x-2 gap-y-6">
        {products?.map((product) => (
          <ProductList key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
