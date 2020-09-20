import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className='App'>
      <h1>This is counter app</h1>
      <div id='counter-value'>{counter}</div>
      <button id='increment-btn'>increment</button>
      <button id='decrement-btn'>increment</button>
    </div>
  );
}

export default App;
