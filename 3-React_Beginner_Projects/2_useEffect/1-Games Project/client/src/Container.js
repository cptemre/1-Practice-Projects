import React from "react";

import Game from "./Game";

const Container = () => {
  return (
    <>
      <div className="grid" id="headerDiv">
        <h1>Our Games</h1>
        <div id="underline"></div>
      </div>
      <Game />
    </>
  );
};

export default Container;
