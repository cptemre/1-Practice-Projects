import React, { useState, useEffect } from "react";
import Lorem from "./Lorem.js";
import { loremData } from "./loremData.js";
import axios from "axios";

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
      setMyList(loremData);
    }
  };

  return <Lorem myList={myList} />;
};

export default App;
