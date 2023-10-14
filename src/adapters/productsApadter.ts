import { Product } from "../models/useProducts";

export const adaptProduct = (apiProduct: Product) => {
  return {
    id: apiProduct.id,
    title: apiProduct.title,
    image: apiProduct.featuredImage ? apiProduct.featuredImage.url : "",
    tags: apiProduct.tags,
    totalInventory: apiProduct.totalInventory,
    tracksInventory: apiProduct.tracksInventory,
    priceMax: apiProduct.prices?.max?.amount,
    priceMin: apiProduct.prices?.min?.amount,
    currencyCode: apiProduct.prices?.max?.currencyCode,
  };
};
