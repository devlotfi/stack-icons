import { useContext } from "react";
import { AppContext } from "../context/app-context";
import { Button, Card, CardBody } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { getIconUrl } from "../utils";

export default function CodeDisplay() {
  const { selectedIcons, height } = useContext(AppContext);

  const getCode = () => {
    return `<div float="left">
  ${selectedIcons
    .map(
      (selectedIcon) =>
        `<img height="${height}px" src="${getIconUrl(
          selectedIcon.icon.id,
          selectedIcon.showLabel
        )}">`
    )
    .join("\n  ")}
</div>`;
  };

  return (
    <Card shadow="none" className="bg-content2 border border-divider">
      <CardBody>
        <div className="flex">
          <div className="flex pr-[1rem]">
            <Button
              variant="bordered"
              className="bg-background"
              isIconOnly
              size="sm"
              onPress={() => navigator.clipboard.writeText(getCode())}
            >
              <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
            </Button>
          </div>

          <pre className="flex flex-1">{getCode()}</pre>
        </div>
      </CardBody>
    </Card>
  );
}
