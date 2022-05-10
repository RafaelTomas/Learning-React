import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [reverse, setReverse] = useState(false);
  const [count, setCount] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Click in button: {count} </h1>
        <button onClick={handleClick} type="button">
          Reverse
        </button>
      </header>
    </div>
  );
}

export default App;
