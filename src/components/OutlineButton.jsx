export const OutlineButton = ({ bgColor, color, border, value }) => {
  return (
    <button
      className="shadow contactme"
      style={{
        background: bgColor,
        color: color,
        border: border,
        padding: "10px 18px",
        borderRadius: "6px",
        cursor: "pointer",
        fontFamily: "Roboto, sans-serif",
        fontSize: "1rem",
      }}
    >
      {value}
    </button>
  );
};
