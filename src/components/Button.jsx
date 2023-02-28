import "../css/common.css";
const Button = ({ children, backgroundColor, outline, click }) => {
  return backgroundColor === undefined ? (
    <button
      style={{
        border: `2px solid ${outline}`,
        backgroundColor: "#FFFF",
        color: outline,
      }}
      onClick={click}
    >
      {children}
    </button>
  ) : (
    <button style={{ backgroundColor: backgroundColor }} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
