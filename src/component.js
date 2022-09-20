import React, { useState } from "react";

function Component() {
  const [bgColor, setBgColor] = useState("#ffffff");

  function changebg() {
    const array = ["A", "B", "C", "D", "F", "E", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let answer = "#";
    for (let i = 0; i <= 5; i++) {
      let randomNum = Math.floor(Math.random() * array.length);
      answer += array[randomNum];
    }
    setBgColor(answer);
  }

  const styleBackground = {
    background: bgColor,
  };

  return (
    <div style={styleBackground} className="container-large">
      <div className="container-small">
        <div className="writing-container">
          <h4>The current color is: </h4>
          <div className="hex-display_container">
            <h1 className="hex-display">{bgColor}</h1>
          </div>
        </div>
        <div>
          <button onClick={changebg} className="btn-color">
            Change Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default Component;
