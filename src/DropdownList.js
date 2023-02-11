import React, { useState } from "react";
import { FormControl, Select, MenuItem, InputLabel, TextField } from "@mui/material";

const DropdownList = ({ options, title, onOptionSelected }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedUrl, setSelectedUrl] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [customPrice, setCustomPrice] = useState("");
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
    options.push({ url: customUrl, name: customUrl, price: customPrice });
    console.log(options)
    setSelectedOption("Add your own");
    onOptionSelected({ url: customUrl, name: "Add your own", price: customPrice });
    setCustomUrl(customUrl);
    setCustomPrice(customPrice);
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
              {option.name} ({option.price}$)
            </MenuItem>
          ))}
          <MenuItem key="add-your-own" value="Add your own">
            Add your own
          </MenuItem>
        </Select>
      </FormControl>
      {selectedOption !== "" && (
        <div style={{ display: "flex", marginTop: 20 }}>
          {selectedOption === "Add your own" ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <>
              {!addClicked ? (
                <div>
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
                  URL: {customUrl || "Enter a URL"}
                </p>
                <p>
                  Price: {customPrice || "Enter a price"}
                </p>
              </>
            </div>
          ) : (
            <>
              <p style={{ marginRight: 20 }}>
                URL: {selectedUrl}
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