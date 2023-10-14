export interface Products {
  slice(arg0: number, arg1: number): unknown;
  products: ProductsClass;
}

export interface ProductsClass {
  nodes: Products[];
}

export interface Product {
  featuredImage: any;
  id?: string;
  title?: string;
  tags?: string[];
  totalInventory?: number;
  tracksInventory?: boolean;
  image?: FeaturedImage;
  prices?: Prices;
}

export interface FeaturedImage {
  url: string;
}

export interface Prices {
  max: Max;
  min: Max;
}

export interface Max {
  amount: string;
  currencyCode: CurrencyCode;
}

export enum CurrencyCode {
  Eur = "EUR",
}
