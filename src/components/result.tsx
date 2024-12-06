/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AppContext } from "../context/app-context";
import { Card, CardHeader, Divider, CardBody, Input } from "@nextui-org/react";
import ResultIconItem from "./result-icon-item";
import CodeDisplay from "./code-display";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTextHeight } from "@fortawesome/free-solid-svg-icons";

export default function Result() {
  const { selectedIcons, height, setHeight } = useContext(AppContext);

  return (
    <Card shadow="none" className="border border-divider">
      <CardHeader>
        <div className="flex font-medium text-[13pt]">Result</div>
      </CardHeader>
      <Divider></Divider>
      <CardBody>
        <div className="flex flex-col space-y-3">
          {selectedIcons.length > 0 ? (
            <>
              <div className="flex flex-wrap gap-1">
                {selectedIcons.map((selectedIcon) => (
                  <ResultIconItem selectedIcon={selectedIcon}></ResultIconItem>
                ))}
              </div>
              <Input
                name="height"
                type="number"
                min={0}
                max={99}
                step={1}
                value={height as any}
                onChange={(e) => {
                  const value: number = e.target.value as any;
                  if (value >= 0 && value < 100) {
                    setHeight(e.target.value as any);
                  }
                }}
                label="Height"
                classNames={{
                  inputWrapper: "border border-divider shadow-none bg-content2",
                }}
                startContent={
                  <FontAwesomeIcon icon={faTextHeight}></FontAwesomeIcon>
                }
                endContent={<div className="flex">px</div>}
              ></Input>
              <CodeDisplay></CodeDisplay>
            </>
          ) : (
            <div className="flex p-[1rem]">Select icons to get started</div>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
