import start from "../assets/startreview.png";

const ProductReview = ({ reviewValue }) => {
  let numberOfStars = 0;

  for (let i = 1; i <= 5; i++) {
    if (reviewValue >= (i - 1) * 100 && reviewValue < i * 100) {
      numberOfStars = i;
      break;
    }
  }

  return (
    <div className="stars-contenedor">
      {Array.from({ length: numberOfStars }).map((_, index) => (
        <img key={index} src={start} alt="star" />
      ))}
    </div>
  );
};

export default ProductReview;
