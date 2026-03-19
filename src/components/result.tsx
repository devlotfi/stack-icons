/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AppContext } from "../context/app-context";
import { Card, InputGroup, Label, Separator, TextField } from "@heroui/react";
import ResultIconItem from "./result-icon-item";
import CodeDisplay from "./code-display";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTextHeight } from "@fortawesome/free-solid-svg-icons";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";

export default function Result() {
  const { selectedIcons, height, setHeight } = useContext(AppContext);

  return (
    <Card className="border-border border">
      <Card.Header>
        <div className="flex space-x-2 items-center text-[12pt]">
          <FontAwesomeIcon
            className="text-accent"
            icon={faMarkdown}
          ></FontAwesomeIcon>
          <div className="flex font-medium">Result</div>
          <div className="flex text-[11pt]">(Click icons to edit)</div>
        </div>
      </Card.Header>
      <Separator className="bg-border"></Separator>
      <Card.Content>
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
              <TextField>
                <Label>Size</Label>
                <InputGroup className="border border-border bg-background">
                  <InputGroup.Prefix>
                    <FontAwesomeIcon icon={faTextHeight}></FontAwesomeIcon>
                  </InputGroup.Prefix>
                  <InputGroup.Input
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
                  />
                  <InputGroup.Suffix>
                    <div className="flex">px</div>
                  </InputGroup.Suffix>
                </InputGroup>
              </TextField>

              <CodeDisplay></CodeDisplay>
            </>
          ) : (
            <div className="flex p-[1rem]">Select icons to get started</div>
          )}
        </div>
      </Card.Content>
    </Card>
  );
}
