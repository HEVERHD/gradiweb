import { useEffect, useState } from "react";
import { getProductAll } from "../services/productsAll";
import { Product } from "../models/useProducts";
import ProductCard from "../components/sliderProduct/ProductCard";
import { HeaderTop } from "../components/HeaderTop";
import { NewLetter } from "../components/NewLetter";
import left from "../assets/leftArr.png";

import "../styles/pages/_pagesProductAll.scss";

export const PagesProductAll = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProductAll();
      const allProducts = response.data.products.nodes;
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  const goToBack = () => {
    window.history.back();
  };

  return (
    <>
      <HeaderTop />
      <div className="container container-product-all">
        <div className="container-button-back" onClick={goToBack}>
          <svg
            width="43"
            height="43"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 17L6 12M6 12L11 7M6 12L18 12"
              stroke="#111827"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h1>Product All</h1>
      </div>
      <div className="container products">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <NewLetter />
    </>
  );
};
