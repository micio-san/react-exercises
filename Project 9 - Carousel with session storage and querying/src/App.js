import React, { useState, useEffect } from "react";
import Card from "./components/card";
import Next from "./components/next-btn";
import Prev from "./components/prev-btn";
import Heart from "./components/heart";
//session
//``

function App() {
  const [animals, setAnimals] = useState();
  const [idx, setIdx] = useState(0);
  const [loading, setLoading] = useState(true);

  const width = 500;

  function fetchData() {
    if (animals) {
      const storingAnimals = sessionStorage.getItem("animals");
      const parsedAnimals = JSON.parse(storingAnimals);
      setAnimals(parsedAnimals);
      setLoading(false);
    } else {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
        },
      };

      fetch(
        "https://bing-image-search1.p.rapidapi.com/images/trending",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          const animals = response.categories[1].tiles;
          setAnimals(animals);
          sessionStorage.setItem("animals", JSON.stringify(animals));
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const styles = {
    transform: `translateX(-${width * idx}px)`,
    transition: " .5s ease transform",
  };

  function pickDirection(e) {
    const which = e.target.classList[0];
    switch (which) {
      case "prev":
        setIdx((prev) => {
          if (prev <= 0) prev = 0;
          return prev - 1;
        });
        break;
      case "next":
        setIdx((prev) => {
          if (prev >= animals.length - 2) prev = animals.length - 2;
          return prev + 1;
        });
        break;
    }
  }

  function removeClass() {
    const sliders = document.querySelectorAll("dot");
    sliders.forEach((slide) => {
      slide.classList.remove("active");
    });
  }

  const Dots = () =>
    animals.map((one, indice) => {
      return (
        <div
          onClick={(e) => {
            e.target.classList.add("active");
            setIdx(indice);
          }}
          key={indice}
          className={idx == indice ? "dot active" : "dot"}
        ></div>
      );
    });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="heart-container">
          <Heart className="heart" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <header>
          <section className="title-container ">
            <h4>Project 9</h4>
            <h1>
              Carousel <br /> Querying and Session Storage
            </h1>
            <div className="underline"></div>
          </section>
        </header>
        <main>
          <nav>
            <button className="prev" onClick={pickDirection}>
              <Prev className="svg-icon" />
            </button>
            <button className="next" onClick={pickDirection}>
              <Next className="svg-icon" />
            </button>
          </nav>
          <section className="carousel-container">
            <div style={styles} className="carousel-slider">
              {animals.map((oneAnimal, indice) => {
                return <Card key={indice} info={oneAnimal} />;
              })}
            </div>
          </section>
          <div className="dot-container">
            <Dots />
          </div>
        </main>
        <footer>
          <div className="footer-text-container">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>
              Adipisicing elit. <br /> Praesentium saepe sunt explicabo eaque
              cumque nobis assumenda maiores facilis quos sed.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
