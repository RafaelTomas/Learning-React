import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  /*sem dependencia executa toda vez que o componenet atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });*/

  /*com dependencia mas sem estar 'setada' executa uma vez
  useEffect(('componentDidMount') => {
    console.log();
  }, []);*/

  //com dependencia 'setada' executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log(`contador ${counter}`);
  }, [counter]);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
