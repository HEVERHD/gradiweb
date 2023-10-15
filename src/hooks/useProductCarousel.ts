import { useEffect, useState } from "react";
import { getProductAll } from "../services/getProducts";
import { Product } from "../models/useProducts";
import { adaptProduct } from "../adapters/productsApadter";

export function useProductDataCarousel() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductAll();
        const allProducts = response?.data?.products.nodes;
        const adaptedProducts = allProducts.map(adaptProduct);

        const randomProducts = selectRandomProducts(adaptedProducts, 5);

        setProducts(randomProducts);
        setIsLoading(false);
      } catch (error: unknown) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, isLoading, error };
}

function selectRandomProducts(products, numProducts) {
  if (products.length <= numProducts) {
    return products;
  }

  const shuffledProducts = products.sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(0, numProducts);
}
