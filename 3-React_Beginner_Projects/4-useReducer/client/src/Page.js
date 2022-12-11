import React, { useContext, useReducer } from "react";
import { data } from "./data";

const DataContext = React.createContext();

const Page = () => {
  const reducer = (state, action) => {
    if (action.type === "DELETE") {
      const newItems = state.items.filter(
        (item) => item["id"] !== action.payload
      );
      return { ...state, items: newItems };
    }
    if (action.type === "INCREASE") {
      let item = state.items.filter((item) => item.id === action.payload.id);
      item[0].pieces = action.payload.pieces + 1;
      let items = state.items.filter((item) => item.id !== action.payload.id);
      items = [...items, item[0]];
      items.sort((a, b) => a.id - b.id);
      return { ...state, items };
    }
    if (action.type === "DECREASE") {
      let item = state.items.filter((item) => item.id === action.payload.id);
      item[0].pieces = action.payload.pieces - 1;
      if (item[0].pieces !== 0) {
        let items = state.items.filter((item) => item.id !== action.payload.id);
        items = [...items, item[0]];
        items.sort((a, b) => a.id - b.id);
        return { ...state, items };
      } else {
        let items = state.items.filter((item) => item.id !== action.payload.id);
        items.sort((a, b) => a.id - b.id);
        return { ...state, items };
      }
    }
    if (action.type === "CLEAR") {
      return { ...state, items: [] };
    }
    return state;
  };

  let items = [];
  for (let i = 0; i < data.length; i++) {
    let singleItem = data[i];
    items = [...items, singleItem];
  }
  const defaultState = {
    items: items,
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      <Header />
      <Main />
    </DataContext.Provider>
  );
};

const Header = () => {
  const { state } = useContext(DataContext);

  let itemPieces = 0;

  for (let i = 0; i < state.items.length; i++) {
    itemPieces += state.items[i].pieces;
  }
  return (
    <div id="headerDiv">
      <h1 id="myBag">My Bag</h1>
      <div id="itemNumber">{itemPieces}</div>
    </div>
  );
};

const Main = () => {
  return (
    <div id="itemDiv">
      <Item />
      <Total />
      <ClearAll />
    </div>
  );
};

const Item = () => {
  const { state, dispatch } = useContext(DataContext);

  return (
    <>
      {state.items.map(({ id, name, price, pieces }) => {
        return (
          <div className="itemsDiv" key={id}>
            <div className="itemNameDiv">
              <h3 className="names">{name}</h3>
              <h3 className="prices">$ {price}</h3>
              <button
                className="deleteBtns"
                onClick={() => dispatch({ type: "DELETE", payload: id })}
              >
                Delete
              </button>
            </div>
            <div className="itemPiecesDiv">
              <button
                className="arrowBtns"
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: { id, pieces } })
                }
              >
                &#8593;
              </button>
              <h3 className="pieces">{pieces}</h3>
              <button
                className="arrowBtns"
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: { id, pieces } })
                }
              >
                &#8595;
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Total = () => {
  const { state, dispatch } = useContext(DataContext);
  let totalPrice = 0;
  for (let i = 0; i < state.items.length; i++) {
    totalPrice += Number(state.items[i].price) * Number(state.items[i].pieces);
  }
  return (
    <div id="totalDiv">
      <h4 id="total">Total Price</h4>
      <h4 id="totalPrice">$ {totalPrice}</h4>
    </div>
  );
};

const ClearAll = () => {
  const { dispatch } = useContext(DataContext);

  return (
    <button id="clearAll" onClick={() => dispatch({ type: "CLEAR" })}>
      CLEAR ALL
    </button>
  );
};

export default Page;
