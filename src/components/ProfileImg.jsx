export const ProfileImg = ({ img, alt }) => {
  return (
    <div
      style={{
        marginRight: "auto",
        marginLeft: "auto",
        width: "165px",
        height: "165px",
        border: "1px solid #D5D5D7",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <figure
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "#D4D4D6",
          borderRadius: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={img}
          alt={alt}
          style={{
            width: "150px",
            position: "absolute",
            height: "150px",
          }}
        />
      </figure>
    </div>
  );
};
