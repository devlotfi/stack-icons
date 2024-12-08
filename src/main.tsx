import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import AppProvider from "./provider/app-provider.tsx";
import { ThemeProvider } from "./provider/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <ThemeProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </ThemeProvider>
    </NextUIProvider>
  </StrictMode>
);
