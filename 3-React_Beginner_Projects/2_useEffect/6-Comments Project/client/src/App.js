import React, { useState, useEffect } from "react";
import Screen from "./Screen.js";
import axios from "axios";
import { comments } from "./commentsData";
const App = () => {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api");
      setMyList(data);
    } catch (error) {
      setMyList(comments);
    }
  };
  return <Screen myList={myList} />;
};

export default App;
