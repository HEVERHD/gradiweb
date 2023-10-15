import { useEffect, useState } from "react";
import { getProductAll } from "../services/getProducts";
import { Product } from "../models/useProducts";
import { adaptProduct } from "../adapters/productsApadter";

export function useProductDataDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductAll();
        const allProducts = response?.data?.products.nodes;
        const adaptedProducts = allProducts.map(adaptProduct);
        setProducts(adaptedProducts);
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
