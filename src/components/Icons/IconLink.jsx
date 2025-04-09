import styles from "./Icons.module.css";
export const IconLink = ({ Icon, theme }) => {
  // agregar el context
  return (
    <li>
      <a href="">
        <Icon
          className={`icon-links ${styles.iconNavLinks} ${
            theme === "dark" ? "icon-dark" : "icon-light"
          }`}
          Icon={Icon}
        />
      </a>
    </li>
  );
};
