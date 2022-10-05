import React from "react";
import Questions from "./components/questions";
import "./index.scss";

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Questions and <br /> answers about login
      </h1>
      <Questions />
    </div>
  );
}

export default App;
