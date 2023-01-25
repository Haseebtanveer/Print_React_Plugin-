import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import FileUpload from "./components/FileUpload";
import PrintJobNotification from "./components/PrintJobNotification";
// import logo from "./logo.svg";
import "./App.css";
import { chrome } from "chrome-extension-async";
function App() {
  function test() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript({
        traget: { tabId: activeTabId },
        function: () => {
          document.body.innerHTML = "Hello World";
        },
      });
    });
  }
  console.log(test);
  return (
    <div className="App">
      <header className="App-header">
        {/*   <FileUpload /> */}
        <PrintJobNotification />
      </header>
    </div>
  );
}

export default App;
