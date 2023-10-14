import PropsErr from "../types/TypeError";

const ErrorScreen = ({ message }: PropsErr) => {
  return (
    <div className="container error-screen">
      <p>
        <span>Oops!</span> {message}
      </p>
    </div>
  );
};

export default ErrorScreen;
