import "./App.css";

import Header from "./Components/Header";
import JsonLintComponent from "./Components/JsonLint";
import Sidebar from "./Components/Sidebar/Sidebar";
import TextArea from "./Components/TextArea";
import WordCountTitle from "./Components/WordCount";
import logo from "./logo.svg";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [activeOption, setActiveOption] = useState("wordCounter");

  return (
    <div className="App">
      <Sidebar activeOption={activeOption} setActiveOption={setActiveOption} />
      {/* <Header activeOption={activeOption} setActiveOption={setActiveOption} /> */}
      <div className="main">
      {activeOption === "wordCounter" ? (
        <>
          <TextArea setCount={setCount} count={count} />
        </>
      ) : (
        <JsonLintComponent />
      )}
      </div>
    </div>
  );
}

export default App;
