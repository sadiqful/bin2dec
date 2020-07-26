import React from "react";
import PropTypes from "prop-types";

const Input = ({ inputBinary, handleBinaryInput }) => {
  return (
    <div className="input">
      <input
        name="binaryNumber"
        type="text"
        minLength="1"
        maxLength="20"
        value={inputBinary.value}
        onChange={handleBinaryInput}
        autofocus
      />
    </div>
  );
};
Input.PropTypes = {
  value: PropTypes.number
};

export default Input;
