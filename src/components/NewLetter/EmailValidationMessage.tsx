const EmailValidationMessage = ({ isValid }) => {
  return isValid ? null : (
    <p style={{ color: "red" }}>
      Invalid email address. Please enter a valid email.☹
    </p>
  );
};

export default EmailValidationMessage;
