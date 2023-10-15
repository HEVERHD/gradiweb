import { useState } from "react";
import EmailInput from "./EmailInput";
import SubscribeButton from "./SubscribeButton";
import EmailValidationMessage from "./EmailValidationMessage";
import Swal from "sweetalert2";

const NewLetterContainer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const valid = emailPattern.test(email);
    if (valid) {
      Swal.fire({
        icon: "success",
        title: "Email is valid!",
        text: "You will receive our promotions and news",
        showConfirmButton: false,
        timer: 2000,
        background: "#e2f7ff",
        iconColor: "#efa693",
      });
    }
    setIsValid(valid);
  };

  return (
    <div className="container content">
      <EmailInput
        email={email}
        setEmail={setEmail}
        validateEmail={validateEmail}
        isValid={isValid}
      />
      <SubscribeButton validateEmail={validateEmail} />
      <EmailValidationMessage isValid={isValid} />
    </div>
  );
};

export default NewLetterContainer;
