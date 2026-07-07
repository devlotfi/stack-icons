import { Spinner } from "@heroui/react";

export default function LoadingScreen() {
  return (
    <div className="flex flex-1 flex-col min-h-[10rem] justify-center items-center">
      <Spinner color="accent" size="lg"></Spinner>
    </div>
  );
}
