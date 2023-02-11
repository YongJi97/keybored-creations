import React, { useState } from "react";
import DropdownList from "./DropdownList";
import "./App.css";
import Header from "./Header";
import DisplayOption from "./DisplayOption";

const App = () => {

  const parts = ["Case", "Switches", "Stabilizers", "Keycaps"];

  const options = [
    { url: "https://option1", name: "Option 1", price: 10 },
    { url: "https://option2", name: "Option 2", price: 20 },
    { url: "https://option3", name: "Option 3", price: 30 },
    { url: "https://option4", name: "Option 4", price: 40 },
  ];
  
  const value = options[0].name;

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
      <DropdownList title="Case" options={options} value={value} onOptionSelected={handleOptionSelected} />
      <DropdownList title="Switches" options={options} value={value} onOptionSelected={handleOptionSelected} />
      <DropdownList title="Stabilizers" options={options} value={value} onOptionSelected={handleOptionSelected} />
      <DropdownList title="Keycaps" options={options} value={value} onOptionSelected={handleOptionSelected} />


      </div>
      <div className="right-side-container">
      {/* <DisplayOption selectedOption={selectedOption} /> */}

      <div>Total Price: {totalPrice}$</div>
      </div>
    </div>
  );
};


export default App;
