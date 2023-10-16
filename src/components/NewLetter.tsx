import { useState } from "react";
import "../styles/components/_newletter.scss";
import Swal from "sweetalert2";
import pastGreen from "../assets/pastillaverde1.png";
import pastPink from "../assets/pastlla41.png";
import pastGray from "../assets/pastilla21.png";
import pastGray2 from "../assets/pastilla61.png";
import pastBlue from "../assets/pastilla31.png";

export const NewLetter = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(email) || email === "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    if (email === "") {
      setIsValid(true);
    } else if (emailPattern.test(email)) {
      setIsValid(true);

      Swal.fire({
        icon: "success",
        title: "Email is valid!",
        text: "You will receive our promotions and news",
        showConfirmButton: false,
        timer: 2000,
        background: "#e2f7ff",
        iconColor: "#efa693",
      });
    } else {
      setIsValid(false);
    }
  };
  return (
    <div className="container-fluid bg-aqua">
      <img className="img-new-letter" src={pastGreen} alt="icono" />
      <img className="img-new-letter2" src={pastPink} alt="icono" />
      <img className="img-new-letter3" src={pastGray} alt="icono" />
      <img className="img-new-letter4" src={pastGray2} alt="icono" />
      <img className="img-new-letter5" src={pastBlue} alt="icono" />

      <div className="container content">
        <div className="title-new-letter">
          <h1>Join the green revolution without commitment</h1>
        </div>
        <div className="subtitle-new-letter">
          <p>
            If you are missing something and don't want to miss future
            promotions or our future products
          </p>
        </div>
        <div className="container-input">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            style={{ borderColor: isValid ? "#efa693" : "#ffbd68" }}
            placeholder="Your Email"
          />
          <button>SEND</button>
        </div>
        {isValid ? null : (
          <p style={{ color: "red" }}>
            Invalid email address. Please enter a valid email.☹
          </p>
        )}
      </div>
    </div>
  );
};
