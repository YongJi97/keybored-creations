import React from "react";

const DisplayOption = ( selectedOption ) => {
  console.log("displayOption", selectedOption);
  return (
    <div>
      {selectedOption.name && (
        <div>
          <p>Name: {selectedOption.name}</p>
          <p>URL: {selectedOption.url}</p>
          <p>Price: {selectedOption.price}</p>
        </div>
      )}
    </div>
  );
};

export default DisplayOption;
