import React, { useEffect, useState } from "react";
import Information from "./Information";
import $ from "jquery";

const Background = ({ selectedName }) => {
  const [backgroundData, setBackgroundData] = useState([]);

  useEffect(() => {
    setBackgroundData(selectedName);
    if (selectedName) {
      const id = selectedName.map((item) => item["id"]);
      $(`.nameDiv:eq(${id})`).css("background-color", "white");
    }
  }, [selectedName]);
  return (
    <div id="secondContainer">
      {backgroundData ? (
        <>
          <div id="backgroundDiv">
            <div id="titleDiv">
              {backgroundData.map((item) => item["title"])}
            </div>
            <div id="experienceDiv">
              {backgroundData.map((item) => item["experience"])} of experience
            </div>
            <div id="nameDiv">{backgroundData.map((item) => item["name"])}</div>
          </div>
          <Information selectedName={selectedName} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Background;
