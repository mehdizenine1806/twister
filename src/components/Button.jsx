import "../css/common.css";
const Button = ({ children, backgroundColor, outline }) => {
  return backgroundColor === undefined ? (
    <button
      style={{
        border: `2px solid ${outline}`,
        backgroundColor: "#FFFF",
        color: outline,
      }}
    >
      {children}
    </button>
  ) : (
    <button style={{ backgroundColor: backgroundColor }}>{children}</button>
  );
};

export default Button;
