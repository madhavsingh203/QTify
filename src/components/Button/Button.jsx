import "./Button.css";

const Button = ({ text }) => {
  return (
    <>
      <button className="button w-48">
        {text}
        </button>
    </>
  );
};

export default Button;
