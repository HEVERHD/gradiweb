import { useState, useEffect } from "react";
import { getProductAll } from "../services/productsAll";
import { Products } from "../models/useProducts";

export const ProductsAll = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProductAll();
      setProducts(response.data.products.nodes);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div>Products</div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.id} - {product.title} - {product.prices.max.amount}
          </li>
        ))}
      </ul>
    </>
  );
};
