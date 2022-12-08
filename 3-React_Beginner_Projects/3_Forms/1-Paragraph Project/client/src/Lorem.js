import React, { useEffect, useState } from "react";

const Lorem = ({ myList }) => {
  const [data, setData] = useState([]);
  const [paras, setParas] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    setData(myList);
  }, [myList]);

  const handleChange = (e) => {
    const value = e.target.value;
    setParas(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult([]);
    let filtered;
    console.log(myList);
    if (paras && paras >= 0 && paras <= 10) {
      filtered = myList.map((item) => {
        if (item["id"] < paras) {
          return item;
        }
      });
      filtered = filtered.filter((item) => item !== undefined);
      setResult(filtered);
    } else {
      setResult([{ id: 0, lorem: "Please enter a value between 1 -10" }]);
    }
  };

  return (
    <div id="main">
      <h1 id="header">Paragraph Project</h1>
      <form id="myForm">
        <label htmlFor="input">Paragraph: </label>
        <input
          type="number"
          id="input"
          name="input"
          value={paras}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Send
        </button>
      </form>
      <div id="paras">
        {result ? (
          result.map(({ id, lorem }) => {
            return (
              <div key={id} className="paras">
                <p>{lorem}</p>
              </div>
            );
          })
        ) : (
          <div>
            <h1>Please enter a value between 1 -10</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lorem;
