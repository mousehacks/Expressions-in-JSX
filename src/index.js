import React from "react";
import ReactDOM from "react-dom";

const fName = "Nadine";
const lName = "Krause";
const luckyNumber = "13";

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your lucky Number is {luckyNumber}.</p>
  </div>,
  document.getElementById("root")
);
