import PropsProduct from "../../interfaces/product";
import ProductReview from "./ProductReview";

const ProductCard = ({ product }: PropsProduct) => {
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
<<<<<<< HEAD
      <div className="container-discount">
        <p>- {product.totalInventory}%</p>
      </div>
=======
>>>>>>> 55c78440439da9c7683c3bd6b8c112bd36ab9328
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
