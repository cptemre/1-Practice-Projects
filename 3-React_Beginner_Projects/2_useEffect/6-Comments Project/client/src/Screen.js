import React, { useState, useEffect } from "react";
import Comment from "./Comment.js";
import $ from "jquery";
const Screen = ({ myList }) => {
  const [leftPerson, setLeftPerson] = useState([]);
  const [mainPerson, setMainPerson] = useState([]);
  const [rightPerson, setRightPerson] = useState([]);

  useEffect(() => {
    setLeftPerson(myList.filter((item) => item["id"] === myList.length - 1));
    setMainPerson(myList.filter((item) => item["id"] === 0));
    setRightPerson(myList.filter((item) => item["id"] === 1));
  }, [myList]);

  useEffect(() => {
    setTimeout(() => {
      $("button").prop("disabled", false);
    }, 450);
  }, [mainPerson]);

  const leftFunc = (e) => {
    const name1 = $(".name:eq(1)").html();
    const filtered = myList.filter((item) => item["name"] === name1);
    let newID = filtered[0]["id"];
    if (newID === myList.length - 1) {
      newID = -1;
    }
    const newMain = myList.filter((item) => item["id"] === newID + 1);
    let newRight;
    if (newID + 2 > myList.length - 1) {
      newRight = myList.filter((item) => item["id"] === 0);
    } else {
      newRight = myList.filter((item) => item["id"] === newID + 2);
    }
    let newLeft;
    if (newID === -1) {
      newLeft = myList.filter((item) => item["id"] === myList.length - 1);
    } else {
      newLeft = myList.filter((item) => item["id"] === newID);
    }
    // CSS TRANSLATE OF MAIN PERSON
    $(".personDivs:eq(1), .personDivs:eq(2)").css({
      transition: `0.3s`,
      transform: "translateX(0)",
    });
    $(".personDivs:eq(1)").css(
      "transform",
      `translateX(calc(-1 * var(--personDivWidth)))`
    );
    $(".personDivs:eq(2)").css(
      "transform",
      `translateX(calc(-1 * var(--personDivWidth)))`
    );
    setTimeout(() => {
      setLeftPerson(newLeft);
      setMainPerson(newMain);
      setRightPerson(newRight);
    }, 400);
    setTimeout(() => {
      $(".personDivs:eq(1), .personDivs:eq(2)").css({
        transition: `0s`,
        transform: "translateX(0)",
      });
    }, 450);
    $(e.currentTarget).prop("disabled", true);
  };
  const rightFunc = (e) => {
    const name1 = $(".name:eq(1)").html();
    const filtered = myList.filter((item) => item["name"] === name1);
    let newID = filtered[0]["id"];
    if (newID === 0) {
      newID = 4;
    }
    const newMain = myList.filter((item) => item["id"] === newID - 1);
    let newRight;
    if (newID > 3) {
      newRight = myList.filter((item) => item["id"] === 0);
    } else {
      newRight = myList.filter((item) => item["id"] === newID);
    }
    let newLeft;
    if (newID - 2 < 0) {
      newLeft = myList.filter((item) => item["id"] === 3);
    } else {
      newLeft = myList.filter((item) => item["id"] === newID - 2);
    }
    // CSS TRANSLATE OF MAIN PERSON
    $(".personDivs:eq(1), .personDivs:eq(0)").css({
      transition: `0.3s`,
      transform: "translateX(0)",
    });
    $(".personDivs:eq(1), .personDivs:eq(0)").css(
      "transform",
      `translateX(calc(var(--personDivWidth)))`
    );

    setTimeout(() => {
      setLeftPerson(newLeft);
      setMainPerson(newMain);
      setRightPerson(newRight);
    }, 400);
    setTimeout(() => {
      $(".personDivs:eq(1), .personDivs:eq(0)").css({
        transition: `0s`,
        transform: "translateX(0)",
      });
    }, 450);
    $(e.currentTarget).prop("disabled", true);
  };
  return (
    <div id="screenDiv">
      <div id="leftBtnDiv" className="buttonDiv">
        <button id="leftBtn" onClick={(e) => leftFunc(e)}>
          &#8249;
        </button>
      </div>
      <Comment
        leftPerson={leftPerson}
        mainPerson={mainPerson}
        rightPerson={rightPerson}
      />
      <div id="rightBtnDiv" className="buttonDiv">
        <button id="rightBtn" onClick={(e) => rightFunc(e)}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Screen;
