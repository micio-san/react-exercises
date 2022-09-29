import React from "react";
import Send from "./icons/sendIcon";

function Main(props) {
  return (
    <main style={props.styles}>
      <section className="section section-left">
        <h1>Hi, I'm Alice</h1>
        <h4>fronted developer</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          illo? Deserunt quia quasi dolores totam eum? Voluptas distinctio
          officia ipsum. Veniam commodi blanditiis voluptates quia omnis sunt
          voluptas autem architecto sit! Ad, officia accusantium nisi ipsum
          cupiditate quaerat eveniet fugit magnam ut rem harum accusamus, odio
          consequuntur doloremque nobis laboriosam?
        </p>
        <button className="btn">
          contact me
          <Send />
        </button>
      </section>
      <section className="section section-right">
        <div className="item">
          <img src="./images/perfil.png" />
        </div>
      </section>
    </main>
  );
}

export default Main;
