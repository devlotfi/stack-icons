import { Button, ScrollShadow } from "@heroui/react";
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
    <div className="min-h-dvh min-w-dvw max-h-dvh max-w-dvw flex flex-col bg-background">
      <div className="flex justify-center">
        <div className="flex flex-1 justify-between max-w-screen-lg p-[1rem]">
          <img className="h-[2.5rem]" src={Logo} alt="logo" />

          <div className="flex items-center gap-[0.5rem]">
            <a href="https://github.com/devlotfi/stack-icons" target="_blank">
              <Button
                isIconOnly
                size="lg"
                variant="outline"
                className="bg-surface text-[15pt] border border-border"
              >
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </Button>
            </a>
            <Button
              isIconOnly
              size="lg"
              variant="outline"
              className="bg-surface text-[15pt] border border-border"
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
          </div>
        </div>
      </div>

      <ScrollShadow className="h-[calc(100dvh-4rem)] flex flex-col items-center pb-[5rem]">
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
              className="text-accent"
              icon={faPlus}
            ></FontAwesomeIcon>
            <div className="flex font-bold">Add icons</div>
          </div>

          <IconList></IconList>
        </div>
      </ScrollShadow>
    </div>
  );
}
