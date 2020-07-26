import React from "react";

const Display = ({ inputBinary, decimalNumber }) => {
  return (
    <div className="display">
      {!inputBinary.binary ? (
        <p className="info">
          <span role="img" aria-label="shrug">
            🤷
          </span>
          Waiting for the Binary Number....
        </p>
      ) : (
        <p>{decimalNumber}</p>
      )}
    </div>
  );
};

export default Display;
