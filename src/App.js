import './App.css';

import Header from './Components/Header'
import TextArea from './Components/TextArea';
import WordCountTitle from './Components/WordCount';
import logo from './logo.svg';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <Header />
      <TextArea setCount={setCount} />
      <WordCountTitle count={count} />
    </div>
  );
}

export default App;
