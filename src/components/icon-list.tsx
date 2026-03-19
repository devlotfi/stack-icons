import { InputGroup, Label, Switch, TextField } from "@heroui/react";
import { iconList } from "../icon-list";
import IconItem from "./icon-item";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function IconList() {
  const [showLabel, setShowLabel] = useState<boolean>(true);

  const { values, handleChange } = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit() {},
  });

  return (
    <div className="flex flex-col space-y-3">
      <TextField>
        <Label>Search</Label>
        <InputGroup className="border-border border bg-surface">
          <InputGroup.Prefix>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </InputGroup.Prefix>
          <InputGroup.Input
            name="search"
            value={values.search}
            onChange={handleChange}
          />
        </InputGroup>
      </TextField>

      <Switch isSelected={showLabel} onChange={setShowLabel} size="lg">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label className="text-sm">Show label</Label>
        </Switch.Content>
      </Switch>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {iconList
          .filter((icon) =>
            icon.displayName
              .toLowerCase()
              .includes(values.search.toLowerCase()),
          )
          .map((icon) => (
            <IconItem
              key={icon.id}
              icon={icon}
              showLabel={showLabel}
            ></IconItem>
          ))}
      </div>
    </div>
  );
}
