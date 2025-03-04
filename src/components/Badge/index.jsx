import TitleSection from "../TitleSection";
const Badge = ({ title }) => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <TitleSection title={title} />
      <a className="contact" href=""></a>
    </section>
  );
};

export default Badge;
