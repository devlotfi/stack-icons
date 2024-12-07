import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Switch,
} from "@nextui-org/react";
import { SelectedIcon } from "../types/selected-icon";
import { useContext } from "react";
import { AppContext } from "../context/app-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  selectedIcon: SelectedIcon;
}

export default function ResultIconItem({ selectedIcon }: Props) {
  const { selectedIcons, setSelectedIcons, height } = useContext(AppContext);

  const changeShowLabel = (value: boolean) => {
    setSelectedIcons([
      ...selectedIcons.map((item) => {
        if (item.icon.id === selectedIcon.icon.id) {
          return {
            showLabel: value,
            icon: item.icon,
          } as SelectedIcon;
        }
        return item;
      }),
    ]);
  };

  const deleteIcon = () => {
    setSelectedIcons([
      ...selectedIcons
        .filter((item) => item.icon.id !== selectedIcon.icon.id)
        .map((selectedIcon) => ({ ...selectedIcon })),
    ]);
  };

  return (
    <Popover showArrow offset={10} placement="bottom">
      <PopoverTrigger className="cursor-pointer">
        <img
          key={selectedIcon.icon.id}
          style={{ height: `${height}px` }}
          src={
            selectedIcon.showLabel
              ? `https://raw.githubusercontent.com/devlotfi/stack-icons/main/icons/${selectedIcon.icon.id}.svg`
              : `https://raw.githubusercontent.com/devlotfi/stack-icons/main/icons/${selectedIcon.icon.id}-compact.svg`
          }
          alt={selectedIcon.icon.id}
        />
      </PopoverTrigger>

      <PopoverContent className="p-[1rem] flex flex-row space-x-3">
        <Button
          color="danger"
          variant="bordered"
          isIconOnly
          onPress={deleteIcon}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </Button>
        <Switch
          isSelected={selectedIcon.showLabel}
          onValueChange={() => changeShowLabel(!selectedIcon.showLabel)}
        >
          Show label
        </Switch>
      </PopoverContent>
    </Popover>
  );
}
