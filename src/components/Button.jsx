export const Button = ({ bgColor, color, border, value }) => {
  return (
    <button
      className="shadow"
      style={{
        backgroundColor: bgColor,
        border: border,
        color: color,
        padding: "10px 18px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {value}
    </button>
  );
};
