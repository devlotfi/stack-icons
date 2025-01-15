import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import Logo from "./assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faMoon,
  faPlus,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Result from "./components/result";
import IconList from "./components/icon-list";
import { useContext } from "react";
import { ThemeContext } from "./context/theme-context";
import { ThemeOptions } from "./types/theme-options";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  const { themeOption, setTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    switch (themeOption) {
      case ThemeOptions.LIGHT:
        setTheme(ThemeOptions.DARK);
        break;
      case ThemeOptions.DARK:
        setTheme(ThemeOptions.SYSTEM);
        break;
      case ThemeOptions.SYSTEM:
        setTheme(ThemeOptions.LIGHT);
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-content2 pb-[5rem]">
      <Navbar className="bg-content2" isBlurred={false}>
        <NavbarBrand>
          <img className="h-[2.5rem]" src={Logo} alt="logo" />
        </NavbarBrand>

        <NavbarContent justify="end">
          <Link
            href="https://github.com/devlotfi/stack-icons"
            target="_blank"
          >
            <Button
              isIconOnly
              variant="bordered"
              className="bg-background pointer-events-none"
            >
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </Button>
          </Link>
          <Button
            isIconOnly
            variant="bordered"
            className="bg-background"
            onPress={switchTheme}
          >
            {themeOption === ThemeOptions.LIGHT ? (
              <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            ) : themeOption === ThemeOptions.DARK ? (
              <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faComputer}></FontAwesomeIcon>
            )}
          </Button>
        </NavbarContent>
      </Navbar>

      <div className="flex flex-col w-full max-w-screen-lg space-y-5 px-[1rem]">
        <div className="flex flex-col items-center p-[1rem] text-center space-y-3">
          <div className="flex items-center space-x-3">
            <img className="h-[2.5rem] md:h-[3.2rem]" src={Logo} alt="logo" />
            <div className="flex font-black text-[20pt] md:text-[30pt]">
              Stack Icons
            </div>
          </div>
          <div className="flex font-medium text-[15pt]">
            Technology icons for github markdown
          </div>
        </div>

        <Result></Result>

        <div className="flex space-x-3 items-center text-[20pt]">
          <FontAwesomeIcon
            className="text-primary"
            icon={faPlus}
          ></FontAwesomeIcon>
          <div className="flex font-bold">Add icons</div>
        </div>

        <IconList></IconList>
      </div>
    </div>
  );
}
