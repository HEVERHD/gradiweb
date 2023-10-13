import { AppRoutes } from "./routes/AppRoutes";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
