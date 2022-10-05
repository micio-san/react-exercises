import React, { useState } from "react";
import Plus from "./icons/plus";
import Minus from "./icons/minus";

function Question(prop) {
  const [status, setStatus] = useState(true);

  function changeStatus() {
    setStatus((prev) => !prev);
    expandText();
  }

  function changeIcon() {
    return status ? <Plus /> : <Minus />;
  }

  function expandText() {
    return status ? "text-container" : "text-container" + " " + "active";
  }

  return (
    <div className="question-container">
      <div onClick={changeStatus} className="btn">
        {changeIcon()}
      </div>
      <h2 className="question-title">{prop.quest}?</h2>
      <div className={expandText()}>
        <p className="">{prop.answ}</p>
      </div>
    </div>
  );
}

export default Question;
