const EmailInput = ({ email, setEmail, validateEmail, isValid }) => {
  return (
    <div className="container-input">
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={validateEmail}
        style={{ borderColor: isValid ? "#efa693" : "#ffbd68" }}
        placeholder="Your Email"
      />
    </div>
  );
};

export default EmailInput;
