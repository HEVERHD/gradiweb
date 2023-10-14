import PropTypes from "prop-types";

import ReusableButtonProps from "../types/ReusableButtonProps";

const ReusableButton = ({ onClick, text, style }: ReusableButtonProps) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

ReusableButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default ReusableButton;
