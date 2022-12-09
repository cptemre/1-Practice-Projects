import React, { useState } from "react";

const Input = () => {
  // Main color
  const [color, setColor] = useState({ red: "", green: "", blue: "" });
  const [allColors, setAllColors] = useState([]);

  const whiterColors = (inputColor) => {
    return Math.floor((255 - inputColor) / 10);
  };
  const darkerColors = (inputColor) => {
    if (inputColor == 0) {
      inputColor = 1;
    }
    return Math.floor(inputColor / 10);
  };

  const loop = (input, range, color, i) => {
    if (input > range) {
      return input - range * i;
    } else if (range >= input) {
      return Number(color) - range * i;
    }
  };

  const colorGenerate = (redInput, greenInput, blueInput) => {
    const { red, green, blue } = color;
    let redRange;
    let greenRange;
    let blueRange;

    // Check if white color value is bigger than inputs and set color ranges
    if (redInput > red) {
      redRange = whiterColors(red);
    } else if (red > redInput) {
      redRange = darkerColors(red);
    }
    if (greenInput > green) {
      greenRange = whiterColors(green);
    } else if (green > greenInput) {
      greenRange = darkerColors(green);
    }
    if (blueInput > blue) {
      blueRange = whiterColors(blue);
    } else if (blue > greenInput) {
      blueRange = darkerColors(blue);
    }

    // Create whiter colors and set them to allcolors array
    for (let i = 0; i < 10; i++) {
      let newRed = loop(redInput, redRange, red, i);
      let newGreen = loop(greenInput, greenRange, green, i);
      let newBlue = loop(blueInput, blueRange, blue, i);

      setAllColors((old) => [
        ...old,
        { red: newRed, green: newGreen, blue: newBlue },
      ]);
      console.log(allColors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllColors([]);
    // call whiter colors
    colorGenerate(255, 255, 255);
    // call darker colors
    colorGenerate(0, 0, 0);
  };

  // Handle input change and set the value to color object
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setColor({ ...color, [name]: value });
  };

  return (
    <>
      <h1>COLOR GENERATOR</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div id="redDiv">
          <label htmlFor="red">RED</label>
          <input
            type="number"
            max={255}
            min={0}
            id="red"
            name="red"
            style={{ backgroundColor: "rgb(240, 25, 15)" }}
            value={color["red"]}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div id="greenDiv">
          <label htmlFor="green">GREEN</label>
          <input
            type="number"
            max={255}
            min={0}
            id="green"
            name="green"
            value={color["green"]}
            style={{ backgroundColor: "rgb(25, 150, 15)" }}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div id="blueDiv">
          <label htmlFor="blue">BLUE</label>
          <input
            type="number"
            max={255}
            min={0}
            id="blue"
            name="blue"
            style={{ backgroundColor: "blue" }}
            value={color["blue"]}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div id="buttonDiv">
          <button type="submit">GENERATE</button>
        </div>
      </form>
      <div id="colorsDiv">
        {allColors.map(({ red, green, blue }, index) => {
          return (
            <div
              key={index}
              className="color"
              style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
            >
              {index > 9 ? (
                <div style={{ color: "white" }} className="colorDiv">
                  <h5 className="name">COLOR</h5>
                  <h5>
                    ({red}, {green}, {blue})
                  </h5>
                </div>
              ) : (
                <div className="colorDiv">
                  <h5 className="name">COLOR</h5>
                  <h5>
                    ({red}, {green}, {blue})
                  </h5>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Input;
