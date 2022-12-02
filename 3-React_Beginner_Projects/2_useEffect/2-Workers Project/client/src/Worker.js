import React, { useEffect, useState } from "react";
import axios from "axios";
import { backupData } from "./data";

const Worker = () => {
  const [counter, setCounter] = useState(0);
  const [myList, setMylist] = useState([]);
  const [worker, setWorker] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api");
      setMylist(data);
      setWorker(data[0]);
    } catch (error) {
      setMylist(backupData);
      setWorker(backupData[0]);
    }
  };

  useEffect(() => {
    setWorker(myList[counter]);
  }, [counter]);
  const right = () => {
    if (counter !== myList.length - 1) {
      setCounter((oldCounter) => oldCounter + 1);
    } else {
      setCounter(0);
    }
  };
  const left = () => {
    if (counter === 0) {
      setCounter(myList.length - 1);
    } else {
      setCounter((oldCounter) => oldCounter - 1);
    }
  };
  const random = () => {
    const randomNumber = Math.floor(Math.random() * myList.length);
    if (counter === randomNumber) {
      random();
    }
    setCounter(randomNumber);
  };
  return (
    <div className="grid" id="mainDiv">
      <section className="grid" id="headerDiv">
        <h1>OUR STAFF</h1>
      </section>
      <section className="grid" id="workerDiv">
        <article className="grid" id="imgDiv">
          <img
            src={worker ? worker.src : ""}
            alt={worker ? worker.name : "Loading..."}
          />
        </article>
        <article className="grid" id="nameDiv">
          <h2 id="name">{worker ? worker.name : "Loading..."}</h2>
          <h3 id="title">{worker ? worker.title : "Loading..."}</h3>
        </article>
        <article className="grid" id="defDiv">
          <p id="def">{worker ? worker.definition : "Loading..."}</p>
        </article>
      </section>
      <section className="grid" id="btnDiv">
        <article className="grid" id="arrowDiv">
          <button className="arrows transition" id="left" onClick={left}>
            &#60;
          </button>
          <button className="arrows transition" id="right" onClick={right}>
            &#62;
          </button>
        </article>
        <button id="random" onClick={random}>
          Random
        </button>
      </section>
    </div>
  );
};

export default Worker;
