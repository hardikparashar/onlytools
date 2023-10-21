import './index.css';

import React from 'react';

const TextAreaComponent = ({setCount,count}) => {
  return (
    <div className="textarea-container">
      <h1 className='wordcountTitle'>Word Counter</h1>
      <textarea onChange={(e) => setCount(e.target.value.split(" ").filter(el => el).length) } className="custom-textarea" placeholder="Enter your text here"></textarea>
      <h2 className="word-count-title">{count} Number of Words in your string</h2>
    </div>
  );
};

export default TextAreaComponent;
