import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Playground } from "./Playground";

function App() {
  return (
    <div className="App flex flex-col flex-1 h-screen">
      <header className="App-header p-4">
        <div className="flex flex-row items-center">
          <span className="flex-row flex">
            Welcome to the React <img src={logo} className="App-logo" alt="logo" /> course 🚀
          </span>
        </div>
        <div className="flex flex-row items-center gap-4">
          <a
            className="App-link"
            href="https://react.dev/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Docs
          </a>
          <a
            className="App-link"
            href="https://react.dev/reference/react"
            target="_blank"
            rel="noopener noreferrer"
          >
            React API reference
          </a>
        </div>
      </header>
      <div className="flex-1 bg-gray-50 p-8">
        <Playground />
      </div>
    </div>
  );
}

export default App;
