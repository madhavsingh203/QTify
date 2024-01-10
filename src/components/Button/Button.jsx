import "./Button.css";

const Button = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="button w-48 hidden md:block">
        {text}
        </button>
    </>
  );
};

export default Button;
