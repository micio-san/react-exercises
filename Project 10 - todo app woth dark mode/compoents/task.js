import React, { useState } from "react";
import Delete from "./delete";
import Check from "./check";

function Task({ propOne, propTwo, propTre, propFour, propFive }) {
  const [crossed, setCrossed] = useState(false);

  const color = () => {
    return propFour ? "task-name light" : "task-name dark";
  };

  return (
    <div
      style={crossed ? { opacity: ".5" } : { opacity: "1" }}
      className="task-container"
    >
      <h4
        style={
          crossed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
        className={color()}
      >
        {propOne}
      </h4>
      <div className="btns-container">
        <button
          onClick={() => {
            propFive();
            setCrossed(true);
          }}
          id={propTwo}
          className="btn btn-check"
        >
          <Check />
        </button>
        <button onClick={propTre} id={propTwo} className="btn btn-delete">
          <Delete />
        </button>
      </div>
    </div>
  );
}

export default Task;
