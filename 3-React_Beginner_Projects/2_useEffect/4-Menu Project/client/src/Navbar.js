import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import $ from "jquery";
import axios from "axios";
import { menuData } from "./menuData";

const Navbar = () => {
  const [myList, setMyList] = useState([]);
  const [myMenu, setMyMenu] = useState([]);
  const [myData, setMyData] = useState([]);
  // GET MENU TITLES AND SET TO NAVDATA

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api");
      setData(data);
    } catch (error) {
      console.log(error);
      setData(menuData);
    }
  };

  const setData = (data) => {
    let types = data.map((item) => item["type"]);
    types = [...new Set(types)];
    setMyMenu(types);
    setMyData(menuData);
    setMyList(data);
  };

  const filterMenu = (e) => {
    const targetHTML = $(e.currentTarget).html().toLowerCase();
    if (targetHTML !== "all") {
      let filterList = myList.filter((item) => item["type"] === targetHTML);
      setMyData(filterList);
    } else {
      setData(myList);
    }
  };

  return (
    <>
      <nav>
        <div className="menuDiv" id="all">
          <h1 onClick={(e) => filterMenu(e)}>ALL</h1>
        </div>
        {myMenu.map((item) => {
          return (
            <div className="menuDiv" key={item}>
              <h1 id={item} onClick={(e) => filterMenu(e)}>
                {item.toUpperCase()}
              </h1>
            </div>
          );
        })}
      </nav>
      <Menu list={myData} />
    </>
  );
};

export default Navbar;
