import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./calculator.scss";
function Calculator() {
  let [input, setInput] = useState("");
  const digits = useRef();
  console.log(digits.current);
  const calculatorDigits = [
    {
      id: uuidv4(),
      value: 7,
    },
    {
      id: uuidv4(),
      value: 8,
    },
    {
      id: uuidv4(),
      value: 9,
    },
    {
      id: uuidv4(),
      value: 4,
    },
    {
      id: uuidv4(),
      value: 5,
    },
    {
      id: uuidv4(),
      value: 6,
    },
    {
      id: uuidv4(),
      value: 1,
    },
    {
      id: uuidv4(),
      value: 2,
    },
    {
      id: uuidv4(),
      value: 3,
    },
  ];

  const result = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput("");
    }
  };
  const remove = () => {
    setInput("");
  };
  const backspace = () => {
    try {
      setInput(input.slice(0, -1));
    } catch {
      setInput("");
    }
  };
  return (
    <>
      <div className="calculator">
        <input
          type="text"
          className="calculator__input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="digits__wrapper">
          <div className="digits">
            <button className="digit" onClick={() => remove()}>
              C
            </button>
            <button
              className="digit"
              value="-"
              onClick={(e) =>
                input !== "" ? setInput(e.target.value + input) : setInput("")
              }
            >
              +/-
            </button>
            <button
              className="digit"
              value="/100"
              onClick={(e) => setInput(input + e.target.value + `*`)}
            >
              %
            </button>
            {calculatorDigits.map((item) => (
              <div
                className="digit"
                key={item.id}
                onClick={() => setInput(input + item.value)}
              >
                {item.value}
              </div>
            ))}
            <button
              className="digit"
              value={"."}
              onClick={(e) => setInput(input + e.target.value)}
            >
              .
            </button>
            <button
              className="digit"
              value="0"
              onClick={(e) => setInput(input + e.target.value)}
            >
              0
            </button>
            <button className="digit" value="0" onClick={() => backspace()}>
              <i className="fa-solid fa-delete-left"></i>
            </button>
          </div>
          <div className="digits__right">
            <button
              value="/"
              className="digit right__digit "
              onClick={(e) => setInput(input + e.target.value)}
            >
              <i className="fa-solid fa-divide"></i>
            </button>
            <button
              value="*"
              className="digit right__digit"
              onClick={(e) => setInput(input + e.target.value)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button
              value="-"
              className="digit right__digit"
              onClick={(e) => setInput(input + e.target.value)}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <button
              value="+"
              className="digit right__digit"
              onClick={(e) => setInput(input + e.target.value)}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
            <button
              value="="
              className="digit right__digit"
              onClick={() => result()}
            >
              <i className="fa-solid fa-equals"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
