import React, { useState, useEffect } from "react";
import $ from "jquery";
import axios from "axios";
import { questions } from "./data";

const Questions = () => {
  const [myList, setMyList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, [isLoading]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api");
      setMyList(data);
    } catch (error) {
      setMyList(questions);
    } finally {
      setIsLoading(false);
    }
  };

  const showHide = (e) => {
    const target = e.currentTarget;
    const secondRow = $(target)
      .parent(".signDiv")
      .parent(".firstRow")
      .parent(".questionDiv")
      .children(".secondRow");
    if ($(target).html() === "+") {
      $(target).html("-");
      $(secondRow).attr("class", "secondRow show");
    } else {
      $(target).html("+");
      $(secondRow).attr("class", "secondRow hide");
    }
  };
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <section id="questionsDiv">
      <div id="header">Frequently Asked Questions</div>
      {myList.map(({ id, question, answer }) => {
        return (
          <article key={id} className="questionDiv">
            <div className="firstRow">
              <div className="question">{question}</div>
              <div className="signDiv">
                <button className="sign" onClick={(e) => showHide(e)}>
                  +
                </button>
              </div>
            </div>
            <div className="secondRow hide">{answer}</div>
          </article>
        );
      })}
    </section>
  );
};

export default Questions;
