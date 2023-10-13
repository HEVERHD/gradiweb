import rectangle from "../../assets/Rectangle-control.png";
import rigth from "../../assets/rigth.png";
import left from "../../assets/leftArr.png";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

const SliderControls = ({ onPrev, onNext }: Props) => {
  return (
    <div className="container-controls">
      <div className="slider-button left" onClick={onPrev}>
        <img className="slider-button left-Arrow" src={left} alt="left" />
        <img src={rectangle} alt="rect" />
      </div>
      <div className="slider-button right" onClick={onNext}>
        <img className="slider-button rigth-Arrow" src={rigth} alt="rigth" />
        <img src={rectangle} alt="rect" />
      </div>
    </div>
  );
};

export default SliderControls;
