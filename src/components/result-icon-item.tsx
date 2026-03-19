import { Button, Label, Popover, Switch } from "@heroui/react";
import { SelectedIcon } from "../types/selected-icon";
import { useContext } from "react";
import { AppContext } from "../context/app-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getIconUrl } from "../utils";

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
    <Popover>
      <Popover.Trigger>
        <img
          key={selectedIcon.icon.id}
          style={{ height: `${height}px` }}
          src={getIconUrl(selectedIcon.icon.id, selectedIcon.showLabel)}
          alt={selectedIcon.icon.id}
        />
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Dialog className="flex gap-[1rem]">
          <Popover.Arrow />
          <Button variant="danger" isIconOnly onPress={deleteIcon}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </Button>

          <Switch
            isSelected={selectedIcon.showLabel}
            onChange={() => changeShowLabel(!selectedIcon.showLabel)}
          >
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Content>
              <Label className="text-sm">Show label</Label>
            </Switch.Content>
          </Switch>
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
}
