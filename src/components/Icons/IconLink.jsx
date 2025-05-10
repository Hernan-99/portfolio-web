import { Link } from "react-router-dom";
import styles from "./Icons.module.css";
export const IconLink = ({ Icon, theme, to }) => {
  // agregar el context
  return (
    <li>
      <Link to={to}>
        <Icon
          className={`icon-links ${styles.iconNavLinks} ${
            theme === "dark" ? "icon-dark" : "icon-light"
          }`}
          Icon={Icon}
        />
      </Link>
    </li>
  );
};
