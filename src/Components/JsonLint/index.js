import './index.css';

import React, { useState } from 'react';

const JsonLintComponent = () => {
  const [jsonText, setJsonText] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [error, setError] = useState(null);

  const handleJsonInputChange = (event) => {
    const text = event.target.value;
    setJsonText(text);
  };

  const handleLintJsonClick = () => {
    try {
      const parsedJson = JSON.parse(jsonText);
      const formatted = JSON.stringify(parsedJson, null, 2);
      setError(null);
      setFormattedJson(formatted);
    } catch (e) {
      setError('Invalid JSON format');
      setFormattedJson('');
    }
  };

  return (
    <div className="json-lint-container">
      <h1>JSON Lint</h1>
      <textarea
        className="json-textarea"
        placeholder="Enter JSON here"
        value={jsonText}
        onChange={handleJsonInputChange}
      />
      <button onClick={handleLintJsonClick}>Lint JSON</button>
      {error && <div className="error">{error}</div>}
      {formattedJson && (
        <div className="formatted-json">
          <pre className='json-text'>{formattedJson}</pre>
        </div>
      )}
    </div>
  );
};

export default JsonLintComponent;
