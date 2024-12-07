import { PropsWithChildren, useState } from "react";
import { SelectedIcon } from "../types/selected-icon";
import { AppContext } from "../context/app-context";

export default function AppProvider({ children }: PropsWithChildren) {
  const [selectedIcons, setSelectedIcons] = useState<SelectedIcon[]>([]);
  const [height, setHeight] = useState<number>(50);

  return (
    <AppContext.Provider
      value={{ selectedIcons, setSelectedIcons, height, setHeight }}
    >
      {children}
    </AppContext.Provider>
  );
}
