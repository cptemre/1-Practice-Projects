import React from "react";

const Menu = ({ list }) => {
  return (
    <div id="mainDiv">
      {list.map(({ id, name, type, price, src }) => {
        return (
          <div key={id} className="foodDiv">
            <div className="nameDiv">
              <h1 className="name">{name.toUpperCase()}</h1>
              <h3 className="price">{price} $</h3>
            </div>
            <figure>
              <img src={src} alt={name} />
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
