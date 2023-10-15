import './index.css';

import React from 'react';

const TextAreaComponent = ({setCount}) => {
  return (
    <div className="textarea-container">
      <textarea onChange={(e) => setCount(e.target.value.split(" ").filter(el => el).length) } className="custom-textarea" placeholder="Enter your text here"></textarea>
    </div>
  );
};

export default TextAreaComponent;
