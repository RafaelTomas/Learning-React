import React, { useState, useCallback } from 'react';
import P from 'prop-types';
import './App.css';

const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(10)}>+</button>;
});
Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
