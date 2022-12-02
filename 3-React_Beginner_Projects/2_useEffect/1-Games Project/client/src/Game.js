import React, { useState, useEffect } from "react";
import $ from "jquery";
import axios from "axios";
import { games } from "./games";
const Game = () => {
  const [myList, setmyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGames();
  }, []);
  const fetchGames = async () => {
    try {
      const { data } = await axios.get("/api");
      setmyList(data);
    } catch (error) {
      setmyList(games);
    } finally {
      setIsLoading(false);
    }
  };
  const remove = (id) => {
    const newList = myList.filter((item) => {
      return item.id !== id;
    });
    setmyList(newList);
  };

  const read = (e, long, short) => {
    const readElement = e.currentTarget;
    if ($(readElement).html() == "READ MORE") {
      $(readElement).siblings(".definitionSpan").html(long);
      $(readElement).html("READ LESS");
    } else {
      $(readElement).siblings(".definitionSpan").html(short);
      $(readElement).html("READ MORE");
    }
  };
  return isLoading ? (
    <div className="grid">
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="grid" id="gamesDiv">
      {myList.map((game) => {
        const { id, names, src, definition } = game;
        const long = definition;
        const short = definition.slice(0, 200);
        return (
          <div key={id} className="game grid">
            <img src={src} alt={names} />
            <div className="defDiv grid">
              <h3 className="names">{names}</h3>
              <div className="definitionDiv">
                <span className="definitionSpan">{short + "..."}</span>
                {definition.length > 200 ? (
                  <span className="read" onClick={(e) => read(e, long, short)}>
                    READ MORE
                  </span>
                ) : (
                  <span></span>
                )}
              </div>

              <button type="button" onClick={() => remove(id)}>
                REMOVE OFFER
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Game;
