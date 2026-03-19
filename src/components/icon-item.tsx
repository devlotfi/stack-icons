import { Card, cn } from "@heroui/react";
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

  const isSelected =
    selectedIcons.find((selectedIcon) => selectedIcon.icon.id === icon.id) !==
    undefined;

  const handlePress = () => {
    if (isSelected) {
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
      onClick={handlePress}
      className={cn(
        "border border-border cursor-pointer",
        isSelected &&
          "border-[2px] border-accent bg-[color-mix(in_srgb,var(--accent),transparent_85%)]",
        !isSelected && "hover:border-accent duration-150 animate-[border]",
      )}
    >
      <Card.Content className="flex-col">
        <img
          className="h-[3rem] my-[1rem]"
          src={getIconUrl(icon.id, showLabel)}
          alt={icon.id}
        />
        <div
          className={cn(
            "flex font-medium self-start",
            isSelected && "text-accent",
          )}
        >
          {icon.displayName}
        </div>
      </Card.Content>
    </Card>
  );
}
