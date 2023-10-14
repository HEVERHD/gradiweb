import "../styles/pages/_pagesProductAll.scss";

import { useProductData } from "../hooks/useProductData";
import ErrorScreen from "../components/ErrorMessage";
import ProductList from "../components/ProductList";
import { HeaderTop } from "../components/HeaderTop";
import { NewLetter } from "../components/NewLetter";

export const PagesProductAll = () => {
  const { products, isLoading, error } = useProductData();

  const goToBack = () => {
    window.history.back();
  };

  return (
    <>
      <HeaderTop />
      <div className="container container-product-all">
        <div className="container-button-back" onClick={goToBack}>
          <svg
            width="43"
            height="43"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 17L6 12M6 12L11 7M6 12L18 12"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {error ? (
        <ErrorScreen message="Oops! Something went wrong, try again later." />
      ) : (
        <ProductList products={products} isLoading={isLoading} />
      )}

      <NewLetter />
    </>
  );
};
