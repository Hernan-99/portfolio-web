import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const SocialIcon = ({ icon, theme }) => {
  console.log(theme);
  return (
    <li>
      <a href="" style={{ color: "#f0f0f0", fontSize: "1.3rem" }}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
};
