import React, { useState, useEffect } from "react";
import Card from "./component/card";
import "./style.scss";
import Star from "./component/icon";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [content, setContent] = useState([]);
  const [idx, setIdx] = useState(1);
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    fetch("https://course-api.com/react-tabs-project")
      .then((answer) => answer.json())
      .then((json) => {
        setContent(json);
        setLoadingStatus(false);
      });
  }, []);

  const ReturnCard = () => {
    return content.filter((each) => {
      return each.order === idx;
    });
  };

  if (loadingStatus) {
    console.log("cow");
    return (
      <div className="loading-container">
        <div className="dot-container">
          <div className="dot dot-uno"></div>
          <div className="dot dot-due"></div>
          <div className="dot dot-tre"></div>
          <div className="dot dot-four"></div>
          <div className="dot dot-cinq"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <h3>Project 8</h3>
        <h1>
          Loading <br />
          and database querying
        </h1>
        <div className="underline"></div>
      </header>
      <main>
        <nav>
          {content.map((each, idx) => {
            return (
              <button
                onClick={() => {
                  return setIdx(() => idx + 1);
                }}
                key={idx}
              >
                {each.company}
              </button>
            );
          })}
        </nav>
        <article>
          {ReturnCard().map((each) => {
            return <Card key={each.order} info={each} />;
          })}
        </article>
      </main>
      <footer>
        <div className="more-info-btn">
          <a className="more-info-text" href="#">
            more Info
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
