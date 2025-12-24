import React from "react";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <section>
      <div className="grid grid-cols-4 gap-x-2 gap-y-6">
        {Array.from({ length: 5 }, (_, i) => (
          <ProductList key={i} />
        ))}
      </div>
    </section>
  );
};

export default Products;
