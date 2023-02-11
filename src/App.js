import React, { useState } from "react";
import DropdownList from "./DropdownList";
import "./App.css";
import Header from "./Header";
import DisplayOption from "./DisplayOption";

const App = () => {

  const parts = ["Case", "Switches", "Stabilizers", "Keycaps"];

  const options = require('./data/options.json');
  const caseOpts = options.Case;
  const switchOpts = options.Switches;
  const stabsOpts = options.Stabilizers;
  const keycapsOpts = options.Keycaps;
  
  const [totalPrice, setTotalPrice] = useState(0);

  const handleOptionSelected = (optionObj) => {
    console.log("ghi")
    console.log(optionObj)
    setTotalPrice(totalPrice + parseFloat(optionObj.price));
  };

  const [selectedOption, setSelectedOption] = useState({});

  const handleChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="body">
      <Header />
      <div className="dropdown-container">
      <DropdownList title="Case" options={caseOpts} value={caseOpts[0].name} onOptionSelected={handleOptionSelected} />
      <DropdownList title="Switches" options={switchOpts} value={switchOpts[0].name} onOptionSelected={handleOptionSelected} />
      <DropdownList title="Stabilizers" options={stabsOpts} value={stabsOpts[0].name} onOptionSelected={handleOptionSelected} />
      <DropdownList title="Keycaps" options={keycapsOpts} value={keycapsOpts[0].name} onOptionSelected={handleOptionSelected} />


      </div>
      <div className="right-side-container">
      {/* <DisplayOption selectedOption={selectedOption} /> */}

      <div>Total Price: ${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};


export default App;
