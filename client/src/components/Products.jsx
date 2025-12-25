import React, { useEffect } from "react";
import ProductList from "./ProductList";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import ProductsNotFound from "./ProductsNotFound";

import Loading from "./Loading";

const Products = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.product);

  console.log(loading, error, products);

  console.log("products:", products);

  useEffect(
    function () {
      dispatch(fetchProducts());
    },
    [dispatch]
  );

  return (
    <section className="w-full">
      {loading && <Loading />}

      {!loading && products && (
        <div className="grid grid-cols-4 gap-x-2 gap-y-6">
          {products?.map((product) => (
            <ProductList key={product._id} product={product} />
          ))}
        </div>
      )}

      {error && <ProductsNotFound message={error} />}
    </section>
  );
};

export default Products;
