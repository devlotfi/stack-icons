import { useContext } from "react";
import { AppContext } from "../context/app-context";
import { Button, Card, CardBody } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function CodeDisplay() {
  const { selectedIcons, height } = useContext(AppContext);

  const getCode = () => {
    return `<div float="left">
  ${selectedIcons
    .map(
      (selectedIcon) =>
        `<img height="${height}px" src="https://github.com/devlotfi/stack-icons/blob/main/icons/${selectedIcon.icon.id}.svg">`
    )
    .join("\n  ")}
</div>`;
  };

  return (
    <Card shadow="none" className="bg-content2 border border-divider">
      <CardBody>
        <div className="flex">
          <pre className="flex flex-1">{getCode()}</pre>

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
      </CardBody>
    </Card>
  );
}
