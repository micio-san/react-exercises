import React, { useState, useEffect } from "react";
import Character from "./components/character";
import Button from "./components/buttons";
import "./style.scss";
import data from "./data.json";

function App() {
  const all = [
    "All Characters",
    ...new Set(
      data.map((char) => {
        return char.manga;
      })
    ),
  ];
  const [show, setShow] = useState(all);
  const [characters, setCharacters] = useState(data);

  function NewData() {
    return characters.map((char, idx) => {
      return <Character key={idx} char={char} />;
    });
  }

  function filterByAnime(e) {
    setCharacters((prev) => {
      return e.target.innerText === "All Characters"
        ? data
        : data.filter((each) => each.manga === e.target.innerText);
    });
    console.log(e.target.innerText);
  }

  return (
    <main>
      <header>
        <h1 className="title">My favorite anime characters</h1>
        <div className="underline"></div>
      </header>
      <Button which={all} action={filterByAnime} />
      <section className="characters-container">
        <NewData />
      </section>
    </main>
  );
}

export default App;
