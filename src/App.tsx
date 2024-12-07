import { Button, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Logo from "./assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSun } from "@fortawesome/free-solid-svg-icons";
import Result from "./components/result";
import IconList from "./components/icon-list";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-content2 pb-[5rem]">
      <Navbar className="bg-content2" isBlurred={false}>
        <NavbarBrand>
          <img className="h-[2.5rem]" src={Logo} alt="logo" />
        </NavbarBrand>

        <NavbarContent justify="end">
          <Button isIconOnly variant="bordered" className="bg-background">
            <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
          </Button>
        </NavbarContent>
      </Navbar>

      <div className="flex flex-col w-full max-w-screen-lg space-y-5 px-[1rem]">
        <div className="flex flex-col items-center p-[2rem] text-center space-y-3">
          <div className="flex items-center space-x-3">
            <img className="h-[3.2rem]" src={Logo} alt="logo" />
            <div className="flex font-black text-[30pt]">Stack Icons</div>
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
