import {
  HomeIcon,
  UserCircleIcon,
  CommandLineIcon,
  PencilSquareIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/16/solid";

import { IconLink } from "../Icons/IconLink";
import { DefaultButton } from "../Buttons/DefaultButton";
export const Navbar = ({ theme, handleTheme }) => {
  const click = () => {
    console.log("click");
  };
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          width: "80%",
        }}
      >
        <IconLink theme={theme} Icon={HomeIcon} to="/" />
        <IconLink theme={theme} Icon={UserCircleIcon} to="/profile" />
        <IconLink theme={theme} Icon={CommandLineIcon} to="/projects" />
        <IconLink theme={theme} Icon={PencilSquareIcon} to="/blogs" />
      </ul>
      <ul
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <button
          onClick={handleTheme}
          style={{
            backgroundColor: "transparent",
            margin: "0",
            padding: "0",
            border: "none",
          }}
        >
          {theme === "dark" ? (
            <IconLink theme={theme} Icon={MoonIcon} />
          ) : (
            <IconLink theme={theme} Icon={SunIcon} />
          )}
        </button>

        <DefaultButton onClick={click} />
      </ul>
    </nav>
  );
};
