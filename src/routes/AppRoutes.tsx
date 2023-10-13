import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "../components/Landing";

import { PagesProductAll } from "../pages/PagesProductAll";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/all-products" element={<PagesProductAll />} />
      </Routes>
    </>
  );
};
