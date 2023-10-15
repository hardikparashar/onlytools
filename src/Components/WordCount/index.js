import "./index.css";

import React from "react";

const WordCountTitle = ({ count }) => {
  return <h2 className="word-count-title">{count} Number of Words in your string</h2>;
};

export default WordCountTitle;
