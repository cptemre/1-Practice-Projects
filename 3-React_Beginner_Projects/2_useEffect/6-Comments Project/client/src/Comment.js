import React, { useState, useEffect } from "react";

const Comment = ({ leftPerson, mainPerson, rightPerson }) => {
  const [left, setLeft] = useState([]);
  const [main, setMain] = useState([]);
  const [right, setRight] = useState([]);
  useEffect(() => {
    setMain(mainPerson);
    setLeft(leftPerson);
    setRight(rightPerson);
  }, [leftPerson]);

  const htmlElements = (id, name, src, title, comment) => {
    return (
      <div key={id} className="personDivs" id={name}>
        <div className="nameDiv">
          <figure>
            <img src={src} alt={name} />
          </figure>
          <h2 className="name">{name}</h2>
          <h3 className="title">{title}</h3>
        </div>
        <p>{comment}</p>
      </div>
    );
  };

  return (
    <div id="namesContainer">
      {left &&
        left.map(({ id, name, src, title, comment }) => {
          return htmlElements(id, name, src, title, comment);
        })}
      {main &&
        main.map(({ id, name, src, title, comment }) => {
          return htmlElements(id, name, src, title, comment);
        })}
      {right &&
        right.map(({ id, name, src, title, comment }) => {
          return htmlElements(id, name, src, title, comment);
        })}
    </div>
  );
};

export default Comment;
