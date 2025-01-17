import { Card, CardBody, cn } from "@nextui-org/react";
import { IconData } from "../types/icon-data";
import { useContext } from "react";
import { AppContext } from "../context/app-context";
import { getIconUrl } from "../utils";

interface Props {
  icon: IconData;
  showLabel: boolean;
}

export default function IconItem({ icon, showLabel }: Props) {
  const { selectedIcons, setSelectedIcons } = useContext(AppContext);

  const isSelected = () => {
    const isSelected = selectedIcons.find(
      (selectedIcon) => selectedIcon.icon.id === icon.id
    );
    return isSelected !== undefined ? true : false;
  };

  const handlePress = () => {
    if (isSelected()) {
      setSelectedIcons([
        ...selectedIcons
          .filter((selectedIcon) => selectedIcon.icon.id !== icon.id)
          .map((selectedIcon) => ({ ...selectedIcon })),
      ]);
    } else {
      setSelectedIcons([
        ...selectedIcons.map((selectedIcon) => ({ ...selectedIcon })),
        {
          icon,
          showLabel,
        },
      ]);
    }
  };

  return (
    <Card
      onPress={handlePress}
      shadow="none"
      isPressable
      className={cn(
        "border border-divider",
        isSelected() &&
          "border-[2px] border-primary bg-[hsl(var(--nextui-primary)/0.2)]"
      )}
    >
      <CardBody className="flex-col">
        <img
          className="h-[3rem] my-[1rem]"
          src={getIconUrl(icon.id, showLabel)}
          alt={icon.id}
        />
        <div
          className={cn(
            "flex font-medium self-start",
            isSelected() && "text-primary"
          )}
        >
          {icon.displayName}
        </div>
      </CardBody>
    </Card>
  );
}
