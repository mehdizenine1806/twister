import "../css/common.css";
const Button = ({ children, backgroundColor, outline,onClick }) => {
  return backgroundColor === undefined ? (
    <button
      style={{
        border: `2px solid ${outline}`,
        backgroundColor: "#FFFF",
        color: outline,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <button style={{ backgroundColor: backgroundColor }} onClick={onClick}>{children}</button>
  );
};

export default Button;
