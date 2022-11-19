import React from "react";
import { MainContainer, Underline } from "./Styles";

function Loading() {
  return (
    <MainContainer>
      <div className="font-container">
        <h1 style={{ color: "orange" }} >Loading</h1>
        <Underline></Underline>
      </div>
    </MainContainer>
  );
}

export default Loading;
