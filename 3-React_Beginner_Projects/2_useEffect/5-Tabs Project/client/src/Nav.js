import React, { useEffect, useState } from "react";
import Background from "./Background";
import $ from "jquery";

const Nav = ({ myList, selectedName }) => {
  const [myData, setMyData] = useState([]);
  const [filteredName, setFilteredName] = useState([]);
  useEffect(() => {
    setMyData(myList);
  }, [myList]);
  useEffect(() => {
    setFilteredName(selectedName);
  }, [selectedName]);

  const navFilter = (e) => {
    const target = $(e.currentTarget).children(".name").html();
    const filtered = myData.filter((item) => item["name"] === target);
    setFilteredName(filtered);
    $(".nameDiv").css("background-color", "black");
    $(e.currentTarget).css("background-color", "white");
  };

  return (
    <div id="container">
      <nav>
        {myData.map(({ id, name }) => {
          return (
            <div key={id} className="nameDiv" onClick={(e) => navFilter(e)}>
              <h1 className="name">{name}</h1>
            </div>
          );
        })}
      </nav>

      <Background myList={myData} selectedName={filteredName} />
    </div>
  );
};

export default Nav;
