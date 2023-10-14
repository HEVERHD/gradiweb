import { Product } from "../../models/useProducts";
import ProductReview from "./ProductReview";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="product-card">
      <img className="" src={product.featuredImage.url} alt={product.title} />
      <div className="container-add">
        <button className="button-card">
          <p>Add to cart</p>
        </button>
      </div>
      <h3>{product.title}</h3>
      <div className="container-content-data">
        <div className="container-review">
          <ProductReview reviewValue={product.tags[0]} />
          <p>({product.tags[0]})</p>
        </div>
        <div className="container-prices">
          <p className="container-prices price-check">
            €{product.prices.min.amount}
          </p>
          <p>€{product.prices.max.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
