import React, { useState } from "react";
import { FormControl, Select, MenuItem, InputLabel, TextField } from "@mui/material";

const DropdownList = ({ options, title, onOptionSelected }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedUrl, setSelectedUrl] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [customPrice, setCustomPrice] = useState("");
  const [customName, setCustomName] = useState("");
  const [addClicked, setAddClicked] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onOptionSelected(options.find((option) => option.name === event.target.value));

    const selectedOptionData = options.find(
      (option) => option.name === event.target.value
    );
    if (selectedOptionData) {
      setSelectedUrl(selectedOptionData.url);
      setSelectedPrice(selectedOptionData.price);
    } else {
      setSelectedUrl("");
      setSelectedPrice("");
    }
  };

  const handleAddOption = () => {
    const customOpt = { url: customUrl, name: customName, price: customPrice };
    options.push(customOpt);
    // console.log(options)
    // setSelectedOption(customOpt);
    // onOptionSelected(customOpt);
    // setCustomUrl(customUrl);
    // setCustomPrice(customPrice);
    setAddClicked(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>{title}</h3>
      <FormControl style={{ width: 200 }}>
        <InputLabel id="demo-simple-select-label">Options</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedOption}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.name} value={option.name}>
              {option.name} (${option.price})
            </MenuItem>
          ))}
          <MenuItem key="add-your-own" value="Add your own">
            Add your own
          </MenuItem>
        </Select>
      </FormControl>
      {selectedOption !== "" && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {selectedOption === "Add your own" ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <>
              {!addClicked ? (
                <div>
              <TextField
                label="Name"
                value={customName}
                onChange={(event) => setCustomName(event.target.value)}
              />
              <TextField
                label="URL"
                value={customUrl}
                onChange={(event) => setCustomUrl(event.target.value)}
              />
              <TextField
                label="Price"
                value={customPrice}
                onChange={(event) => setCustomPrice(event.target.value)}
              />
                <button onClick={handleAddOption}>Add</button>
                </div>
              ) : (
                <div>
                  
                </div>
              )}
              </>
              <>
                <p style={{ marginRight: 20 }}>
                  Name: {customName || "Enter a name for your item"}
                </p>
                <p style={{ marginRight: 20 }}>
                  URL: <a href={customUrl || "Enter a URL"} target="_blank">Click here</a>
                </p>
                <p>
                  Price: {customPrice || "Enter a price"}
                </p>
              </>
            </div>
          ) : (
            <>
              <p style={{ flexDirection: "column" }}>
                URL: <a href={selectedUrl} target="_blank">Click here</a>
              </p>
              <p>
                Price: {selectedPrice}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownList;