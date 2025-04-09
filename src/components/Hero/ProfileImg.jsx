import styles from "./Hero.module.css";
export const ProfileImg = ({ img, alt }) => {
  return (
    <div className={`${styles.containerImg}`}>
      <figure className={`${styles.fig}`}>
        <img className={`${styles.img}`} src={img} alt={alt} />
      </figure>
    </div>
  );
};
