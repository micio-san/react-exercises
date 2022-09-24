import React, { useState } from "react";

function Item(props) {
  const [chopped, setChopped] = useState(true);

  function chopdescr() {
    let descr = props.prop.descr;
    return !chopped ? descr.substring(0, 200) : descr;
  }

  function changeChopping() {
    setChopped((prev) => !prev);
  }

  return (
    <article className="item-container">
      <div className="quote-container">
        <h1>&quot;</h1>
      </div>

      <div className="info-container">
        <div className="image-container">
          <div className="circle-behind"></div>
          <img
            className="customer-image"
            alt={props.prop.name}
            src={props.prop.img}
          />
        </div>
        <div className="text-cont">
          <h1 className="name">
            {props.prop.name} <span> </span> {props.prop.lastName}{" "}
          </h1>
          <h4 className="title">
            {props.prop.title} <span> </span> {props.prop.age}
          </h4>
          <p className="descr">
            {chopdescr()}{" "}
            <a onClick={changeChopping} className="btn-descr" href="#">
              {!chopped ? "Learn More" : "Close"}
            </a>{" "}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Item;
