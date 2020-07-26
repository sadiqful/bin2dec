import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Display from "./components/Display";
import "./styles.css";

function App() {
  const [inputBinary, setInputBinary] = useState({
    value: "",
    binary: false
  });

  const [decimalNumber, setDecimalNumber] = useState();

  useEffect(() => {
    if (inputBinary.value.length > 0 && inputBinary.binary) {
      setDecimalNumber(convertToDecimal(inputBinary.value));
    } else if (inputBinary.value.length === 0) {
      setDecimalNumber("");
    }
  }, [inputBinary]);

  const regExp = /[^01]/;

  const handleBinaryInput = e => {
    const { value } = e.target;
    setInputBinary({ value, binary: !regExp.test(value) });
  };

  const convertToDecimal = num => {
    let convertedNum = 0;
    num
      .split("")
      .reverse()
      .map((item, index) => {
        return item === "1" && (convertedNum += Math.pow(2, index));
      });
    return convertedNum;
  };

  const Alert = () => {
    if (inputBinary.value.length > 0) {
      if (!inputBinary.binary) {
        return (
          <span style={{ color: "#e74c3c", fontWeight: "bold" }}>
            Invalid Input. Only 0s and 1s can be accepted
          </span>
        );
      } else if (inputBinary.binary) {
        return (
          <span style={{ color: "#27ae60", fontWeight: "bold" }}>
            Here is your decimal!
          </span>
        );
      } else {
        return " ";
      }
    }

    return null;
  };

  return (
    <div className="App">
      <div>
        <span className="attenuated">000</span>
        <h1>Bin2Dec</h1>
        <span className="attenuated">000</span>
      </div>
      <p>
        Enter a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Binary_number"
          target="_blank"
          rel="noopener noreferrer"
        >
          binary number
        </a>
        , get a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Decimal"
          target="_blank"
          rel="noopener noreferrer"
        >
          decimal
        </a>{" "}
        conversion
        <br />
        <Alert />
      </p>

      <Input inputBinary={inputBinary} handleBinaryInput={handleBinaryInput} />
      <Display inputBinary={inputBinary} decimalNumber={decimalNumber} />

      <footer>
        Made by{" "}
        <a
          href="https://github.com/sadiqful"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sadiqful
        </a>
      </footer>
    </div>
  );
}
export default App;
