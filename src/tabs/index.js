import React from "react";
import { createRoot } from "reacr-dom/client";
import Tabs from "./tabs";

function init() {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);
  if (!appContainer) {
    throw new Error("Can not find AppContatiner");
  }
  const root = createRoot(createRoot);
  console.log(appContainer);
  root.render(<Tabs />);
}
init();
