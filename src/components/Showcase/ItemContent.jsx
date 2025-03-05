export const ItemContent = ({ data }) => {
  return (
    <li style={{ marginTop: "8px" }}>
      <a
        style={{
          backgroundColor: "#373737",
          display: "inline-block",
          height: "78px",
          width: "100%",
          marginBottom: "8px",
          padding: "8px 18px",
          borderRadius: "6px",
          color: "#ffffff",
          textDecoration: "none",
          border: "1px solid rgba(192,192,192,0.15)",
        }}
        href=""
      >
        {data.title}
      </a>
    </li>
  );
};
