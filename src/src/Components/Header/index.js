import "./index.css";

import React, { useState } from "react";

const Header = ({ activeOption, setActiveOption }) => {
  const handleOptionClick = (option) => {
    setActiveOption(option);
    // Add functionality to switch between Word Counter and JSON Lint
    // For now, we'll just log the selected option
    console.log("Selected option:", option);
  };

  return (
    <div className="header">
      <div className="option" onClick={() => handleOptionClick("wordCounter")}>
        <h1 className={activeOption === "wordCounter" ? "active" : ""}>
          Word Counter
        </h1>
      </div>
      <div className="option" onClick={() => handleOptionClick("jsonLint")}>
        <h1 className={activeOption === "jsonLint" ? "active" : ""}>
          JSON Lint
        </h1>
      </div>
    </div>
  );
};

export default Header;
