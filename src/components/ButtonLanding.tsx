import { Link } from "react-router-dom";
import "../styles/components/_buttonLanding.scss";

export const ButtonLanding = () => {
  return (
    <div className="container-button container">
      <Link to="/all-products" className="container-button main">
        <h1>Browse all products</h1>
      </Link>
    </div>
  );
};
