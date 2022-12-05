import React, { useState, useEffect } from "react";

const Information = ({ selectedName }) => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    if (selectedName) {
      const filter = [
        {
          id: "about1",
          about: selectedName.map((item) => item["about1"]),
        },
        {
          id: "about2",
          about: selectedName.map((item) => item["about2"]),
        },
        {
          id: "about3",
          about: selectedName.map((item) => item["about3"]),
        },
      ];
      setAbout(filter);
    }
  }, [selectedName]);
  return (
    <ul id="informationList">
      {about.map((item) => {
        return (
          <li key={item["id"]} className="about">
            {item["about"]}
          </li>
        );
      })}
    </ul>
  );
};

export default Information;
