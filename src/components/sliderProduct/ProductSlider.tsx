import { useState } from "react";
import "../../styles/components/_ProductSlider.scss";

import ProductCard from "./ProductCard";
import SliderControls from "./SliderControls";
import { Loader } from "../Loader";
import { useProductDataCarousel } from "../../hooks/useProductCarousel";
import ErrorScreen from "../ErrorMessage";

const ProductSlider = () => {
  const [scrollX, setScrollX] = useState(0);

  const [currentSlide, setCurrentSlide] = useState(0);

  const { products, isLoading, error } = useProductDataCarousel();

  const cardWidth = 500;
  const visibleCards = 4;

  const handlePrevClick = () => {
    const newSlide = Math.max(currentSlide - 1, -1);
    setCurrentSlide(newSlide);
  };

  const handleNextClick = () => {
    const newSlide = Math.min(currentSlide + 1, products.length - visibleCards);
    setCurrentSlide(newSlide);
  };

  const maxScrollX = -currentSlide * cardWidth;

  return (
    <>
      <SliderControls onPrev={handlePrevClick} onNext={handleNextClick} />

      <div className="product-slider-container">
        {error ? (
          <ErrorScreen message="Oops! Something went wrong, try again later." />
        ) : isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader />
          </div>
        ) : (
          <div
            className="product-slider"
            style={{
              width: `${products.length * cardWidth}px`,
              transform: `translateX(${maxScrollX}px)`,
              transition: "transform 0.5s ease",
            }}
          >
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductSlider;
