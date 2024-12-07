import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import AppProvider from "./provider/app-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </NextUIProvider>
  </StrictMode>
);
