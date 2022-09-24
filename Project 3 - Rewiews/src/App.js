import React from "react";
import List from "./components/list.js";

function App() {
  return (
    <div className="container">
      <div className="title-container">
        <h1>Our reviews</h1>
        <div className="line"></div>
      </div>
      <List />
    </div>
  );
}

export default App;
