import axios from "axios";
import { Products } from "../models/useProducts";

export const getProductAll = () => {
  return axios.get<Products>("https://gradistore-spi.herokuapp.com/products/all");
}