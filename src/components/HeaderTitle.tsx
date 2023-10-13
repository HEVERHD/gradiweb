import rec from "../assets/rectangle.png";
import "../styles/components/_headertitle.scss";

export const HeaderTitle = () => {
  return (
    <div className="header-title title">
      <img className="header-title title img" src={rec} alt="rectangle" />
      <h2>
        Discover our <br /> planet-friendly offer
      </h2>
    </div>
  );
};
