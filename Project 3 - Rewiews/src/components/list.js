import React, { useState } from "react";
import Item from "./item";
import people from "../people";

function List() {
  const [idx, setIdx] = useState(0);
  const ChosenP = people.map((person) => {
    return <Item prop={person} />;
  });

  function move(e) {
    const which = e.target.classList[0];
    switch (which) {
      case "btn-prev":
        setIdx((prev) => {
          if (prev <= 0) {
            return (prev = ChosenP.length - 1);
          }
          return prev - 1;
        });
        break;
      case "btn-next":
        setIdx((prev) => {
          if (prev >= ChosenP.length - 1) {
            return (prev = 0);
          }
          return prev + 1;
        });
        break;
    }
  }

  return (
    <section className="list-container">
      <div className="button-container">
        <button onClick={move} className="btn-prev btn">
          {" "}
          <strong>&lt;</strong>{" "}
        </button>
        <button onClick={move} className="btn-next btn">
          {" "}
          <strong>&gt;</strong>{" "}
        </button>
      </div>
      {ChosenP[idx]}
    </section>
  );
}

export default List;
