import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { RxCross1 } from "react-icons/rx";
import { BiCircle } from "react-icons/bi";
import { useEffect, useState } from "react";

export const App = () => {
  const [cells, setCells] = useState([...Array(9).keys()]);
  const [flag, setFlag] = useState(true);
  const [dataForX, setDataForX] = useState([]);
  const [dataForO, setDataForO] = useState([]);
  const [winner, setWinner] = useState("");
  // ["O",1,2,3,4,"X",6,7,"X"]
  const handleClick = (clickedCell) => {
    const newData = [...cells];
    if (flag) {
      newData[clickedCell] = "X";
      setDataForX([...dataForX, clickedCell]);
    } else {
      newData[clickedCell] = "O";
      setDataForO([...dataForO, clickedCell]);
    }
    setFlag(!flag);
    setCells(newData);
    // console.log(clickedCell)
  };
  const results = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function forLongCombination(arr1, arr2) {
    let counter = 0;
    for (let i of arr2) {
      if (arr1.includes(i)) counter++;
    }
    return counter === 3 ? true : false;
  }

  useEffect(() => {
    for (let i of results) {
      if (forLongCombination(i, dataForO.sort())) {
        //[0,2,3,6]
        setWinner("O");
      } else if (forLongCombination(i, dataForX.sort())) {
        setWinner("X");
      }
    }
  }, [dataForO, dataForX]);

  console.log(dataForO, "OOOOOOOOOO");
  console.log(dataForX, "XXXXXXXX");
  console.log(cells, "cells");

  return (
    <div className="wrapper">
      {cells.map((cell) => {
        return (
          <div
            className="cell"
            style={{
              color: typeof cell === "number" ? "white" : "",
              pointerEvents: typeof cell !== "number" ? "none" : "",
            }}
            onClick={() => handleClick(cell)}
          >
            {cell === "X" ? <RxCross1 /> : <BiCircle />}
          </div>
        );
      })}

      <Button
        outline
        size="lg"
        style={{ margin: "2rem" }}
        onClick={() => {
          setCells([...Array(9).keys()]);
          setWinner("");
          setDataForX([]);
          setDataForO([]);
        }}
      >
        Reset
      </Button>

      {/* <h1 className="winner">{winner}</h1> */}
      {winner && <h5 className="winner">Winner: {winner}</h5>}
    </div>
  );
};
// container
//    row
//      col
//        UI content , cards, products, dashboard
// What is the purpose of the useState hook in React ?
//     a) To fetch data from an API
// b) To manage and update component state
// c) To create reusable components
// d) To handle routing in a React application//
// Which hook is used for performing side effects in a React component ?
//     a) useState
// b) useEffect
// c) useContext
// d) useReducer​
// What hook should you use to share state between components in a React application ?
//     a) useState
// b) useEffect
// c) useContext
// d) useReducer
// Which hook is used for handling complex state logic and actions in a React component ?
//     a) useState
// b) useEffect
// c) useContext
// d) useReducer
// How do you conditionally run an effect in useEffect based on some variable changes ?
//     a) By using a if statement inside useEffect
// b) useEffect cannot be conditional
// c) By passing an array of dependencies as the second argument
// d) By using the when keyword
// What is the primary difference between useState and useReducer ?//
//  a) useState is for managing component state, while useReducer is for global state.
// b) useState can only manage primitive data types, while useReducer can manage complex objects.
// c) useState is a class-based component feature, while useReducer is for functional components.
//     d) There is no significant difference between them.
// primitive data types:
//   String, numbers, boolean, undefined, null
// non primitives:
//   objects, arrays
