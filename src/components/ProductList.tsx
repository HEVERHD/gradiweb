import React from "react";
import { Skeleton } from "./Skeleton";
import ProductCard from "./sliderProduct/ProductCard";

const ProductList = ({ products, isLoading }) => {
  return (
    <div className="container products">
      {isLoading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
