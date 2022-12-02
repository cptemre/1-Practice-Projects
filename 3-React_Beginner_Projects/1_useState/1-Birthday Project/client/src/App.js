import React, { useState, useEffect } from "react";
import axios from "axios";
import { hobbit } from "./hobbits";
const App = () => {
  const [hobbits, setHobbits] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api");
      setHobbits(data);
    } catch (error) {
      setHobbits(hobbit);
    }
  };

  const dismiss = (id) => {
    setHobbits((oldHobbits) => {
      let newHobbits = oldHobbits.filter((hobbit) => hobbit.id !== id);
      return newHobbits;
    });
  };
  return (
    <>
      <h1>Birthday Project</h1>
      <div id="peopleDiv">
        {hobbits.map((hobbit) => {
          const { id, name, age, src } = hobbit;
          return (
            <div key={id} className="personDiv">
              <figure className="imgDiv">
                <img src={src} alt={name} />
              </figure>
              <div className="nameDiv">
                <h4>{name}</h4>
                <h4>{age} years</h4>
              </div>
              <div className="removeBtnDiv">
                <button className="removeBtn" onClick={() => dismiss(id)}>
                  Dismiss
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div id="clearDiv">
        <button id="clearBtn" onClick={() => setHobbits([])}>
          CLEAR ALL
        </button>
      </div>
    </>
  );
};

export default App;
