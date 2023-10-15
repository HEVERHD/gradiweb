import { useEffect } from "react";
import PropsProduct from "../../interfaces/product";
import ProductReview from "./ProductReview";

const ProductCard = ({ product }: PropsProduct) => {
  useEffect(() => {
    const images = document.querySelectorAll(".product-card img");
    images.forEach((image) => {
      image.addEventListener("load", () => {
        if (image.clientHeight === 398) {
          image.style.marginTop = "80px";
        }
      });
    });
  }, []);
  return (
    <div className="product-card">
      <img
        src={
          product.image && typeof product.image === "string"
            ? product.image
            : "https://via.placeholder.com/300x300.png?text=Product+Image"
        }
        className="product-image"
        alt={product.title}
      />
      <div className="container-discount">
        <p>- {product.totalInventory}%</p>
      </div>
      <div className="container-add">
        <button className="button-card">
          <p>Add to cart</p>
        </button>
      </div>
      <h3>{product.title}</h3>
      <div className="container-content-data">
        <div className="container-review">
          {product.tags && <ProductReview reviewValue={product.tags[0]} />}
          <p>({product.tags && product.tags[0]})</p>
        </div>
        <div className="container-prices">
          <p className="container-prices price-check">€{product.priceMin}</p>
          <p>€{product.priceMax}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
