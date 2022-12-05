import React, { useState, useEffect } from "react";
// Components
import Nav from "./Nav";
import axios from "axios";
// Local Data
import { applicationData } from "./applicationData";
const App = () => {
  const [myList, setMyList] = useState([]);
  const [selectedName, setSelectedName] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredItem = myList.filter((item) => item["id"] === 0);
    setSelectedName(filteredItem);
  }, [myList]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api");
      setMyList(data);
    } catch (error) {
      setMyList(applicationData);
    }
  };
  return (
    <>
      <div id="headerDiv">
        <h1 id="header">APPLICATIONS</h1>
        <div id="underline"></div>
      </div>
      <Nav myList={myList} selectedName={selectedName} />
    </>
  );
};

export default App;
