const Button = ({ btnText, onClick, disabled }) => {
  return (
    <button
      style={{
        padding: "8px",
        color: "white",
        background: "black",
        border: "none"
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
