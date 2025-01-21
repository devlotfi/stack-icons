/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AppContext } from "../context/app-context";
import { Card, CardHeader, Divider, CardBody, Input } from "@heroui/react";
import ResultIconItem from "./result-icon-item";
import CodeDisplay from "./code-display";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTextHeight } from "@fortawesome/free-solid-svg-icons";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";

export default function Result() {
  const { selectedIcons, height, setHeight } = useContext(AppContext);

  return (
    <Card shadow="none" className="border border-divider">
      <CardHeader>
        <div className="flex space-x-2 items-center text-[12pt]">
          <FontAwesomeIcon
            className="text-primary"
            icon={faMarkdown}
          ></FontAwesomeIcon>
          <div className="flex font-medium">Result</div>
          <div className="flex text-[11pt]">(Click icons to edit)</div>
        </div>
      </CardHeader>
      <Divider></Divider>
      <CardBody>
        <div className="flex flex-col space-y-3">
          {selectedIcons.length > 0 ? (
            <>
              <div className="flex flex-wrap gap-1">
                {selectedIcons.map((selectedIcon) => (
                  <ResultIconItem
                    key={selectedIcon.icon.id}
                    selectedIcon={selectedIcon}
                  ></ResultIconItem>
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
