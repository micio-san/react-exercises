import questionsArray from "../questions.json";
import React, { useState } from "react";
import Question from "./question";

function Questions() {
  const newQuestions = questionsArray.map((c) => {
    return <Question key={c.id} quest={c.question} answ={c.answer} />;
  });

  return <div className="questions-container">{newQuestions}</div>;
}
export default Questions;
