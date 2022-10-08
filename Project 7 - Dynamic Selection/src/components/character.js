import React, { useState } from "react";

function Character(prop) {
  const [show, setShow] = useState(false);

  function chopDescr() {
    const descr = prop.char.description;
    const idx = descr.indexOf(".");
    return !show ? descr.substring(0, idx + 1) : descr;
  }

  return (
    <div
      className={!show ? "character-container" : "character-container active"}
    >
      <div className="photo-container">
        {" "}
        <img className="photo" src={prop.char.img} alt={prop.char.name} />
      </div>
      <div className="text">
        <h1 className="manga-name">{prop.char.manga}</h1>
        <h2>
          {prop.char.name} {prop.char.lastName}
        </h2>
        <p>{prop.char.age}</p>
        <p>
          {chopDescr()}
          <br />
          <a onClick={() => setShow((prev) => !prev)} className="show-btn">
            {!show ? "Read Full Description" : "Close"}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Character;
