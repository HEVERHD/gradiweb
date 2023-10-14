//services
import { useEffect, useState } from "react";
import { getProductAll } from "../services/getProducts";
import { Products } from "../models/useProducts";

//styles
import "../styles/_utils.scss";

//components
import ProductSlider from "./sliderProduct/ProductSlider";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderTop } from "./HeaderTop";
import { NewLetter } from "./NewLetter";
import { ButtonLanding } from "./ButtonLanding";

const Landing = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProductAll();
      // Obtener solo los primeros 5 productos
      const firstFiveProducts = response.data.products.nodes.slice(0, 5);
      setProducts(firstFiveProducts);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <HeaderTop />
      <HeaderTitle />
      <ProductSlider products={products} />
      <ButtonLanding />
      <NewLetter />
    </>
  );
};

export default Landing;
