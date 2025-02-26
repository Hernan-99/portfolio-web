export const Badge = ({ title }) => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "8px",
            height: "8px",
            backgroundColor: "#616161",
            borderRadius: "100%",
            marginRight: "10px",
          }}
        ></div>
        <h1
          style={{
            color: "#818181",
            fontSize: "1rem",
          }}
        >
          {title}
        </h1>
      </div>
      <a className="contact" href=""></a>
    </section>
  );
};
