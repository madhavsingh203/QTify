import "./Button.css";

const Button = ({ text }) => {
  return (
    <>
      <button className="button w-48 hidden md:block">
        {text}
        </button>
    </>
  );
};

export default Button;
