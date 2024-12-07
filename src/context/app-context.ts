import { createContext } from "react";
import { SelectedIcon } from "../types/selected-icon";

interface AppContext {
  selectedIcons: SelectedIcon[];
  setSelectedIcons: (value: SelectedIcon[]) => void;
  height: number;
  setHeight: (value: number) => void;
}

const initialValue: AppContext = {
  selectedIcons: [],
  setSelectedIcons() {},
  height: 50,
  setHeight() {},
};

export const AppContext = createContext(initialValue);
