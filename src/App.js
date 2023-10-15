import "./App.css";

import Header from "./Components/Header";
import JsonLintComponent from "./Components/JsonLint";
import TextArea from "./Components/TextArea";
import WordCountTitle from "./Components/WordCount";
import logo from "./logo.svg";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [activeOption, setActiveOption] = useState("wordCounter");

  return (
    <div className="App">
      <Header activeOption={activeOption} setActiveOption={setActiveOption} />
      {activeOption === "wordCounter" ? (
        <>
          <TextArea setCount={setCount} />
          <WordCountTitle count={count} />
        </>
      ) : (
        <JsonLintComponent />
      )}
    </div>
  );
}

export default App;
