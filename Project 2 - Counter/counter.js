import React, { useState } from "react";

function Counter() {
  const [currNum, setCurrNum] = useState(1);
  function calculate(e) {
    let button = e.target.classList[1];
    switch (button) {
      case "btn-add":
        setCurrNum((prevNum) => {
          return prevNum + 1;
        });
        break;
      case "btn-reset":
        setCurrNum(0);
        break;
      case "btn-remove":
        setCurrNum((prevNum) => {
          return prevNum - 1;
        });
        break;
    }
  }
  return (
    <div className="container-small">
      <div className="result-container">
        <h1 className="result">{currNum}</h1>
      </div>

      <div className="btn-container">
        <button onClick={calculate} className="btn btn-add">
          +
        </button>
        <button onClick={calculate} className="btn btn-reset">
          0
        </button>
        <button onClick={calculate} className="btn btn-remove">
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
