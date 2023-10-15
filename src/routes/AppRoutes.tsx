import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "../components/Landing";

import { PagesProductAll } from "../pages/PagesProductAll";
import ProductDetail from "../components/ProductDetail";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/all-products" element={<PagesProductAll />} />

        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
};
