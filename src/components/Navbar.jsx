import {
  HomeIcon,
  UserCircleIcon,
  CommandLineIcon,
  PencilSquareIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/16/solid";

import { IconLink } from "./IconLink";
import { DefaultButton } from "./DefaultButton";

export const Navbar = ({ theme, handleTheme }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ul style={{ display: "flex", width: "80%" }}>
        <IconLink theme={theme} Icon={HomeIcon} />
        <IconLink theme={theme} Icon={UserCircleIcon} />
        <IconLink theme={theme} Icon={CommandLineIcon} />
        <IconLink theme={theme} Icon={PencilSquareIcon} />
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

        <DefaultButton />
      </ul>
    </nav>
  );
};
