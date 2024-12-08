import { Input, Switch } from "@nextui-org/react";
import { iconList } from "../icon-list";
import IconItem from "./icon-item";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function IconList() {
  const [showLabel, setShowLabel] = useState<boolean>(true);

  useEffect(() => {}, [showLabel]);

  const { values, handleChange } = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit() {},
  });

  return (
    <div className="flex flex-col space-y-3">
      <Input
        name="search"
        value={values.search}
        onChange={handleChange}
        variant="bordered"
        classNames={{
          inputWrapper: "bg-background",
        }}
        label="Search"
        startContent={<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>}
      ></Input>
      <Switch isSelected={showLabel} onValueChange={setShowLabel}>
        Show label
      </Switch>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {iconList
          .filter((icon) =>
            icon.displayName.toLowerCase().includes(values.search.toLowerCase())
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
