import { useReducer } from 'react';
import { globalState } from './contexts/AppContext/data';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { couter, title, body } = state;
  return (
    <div>
      <h1>
        {title} {couter}
      </h1>
      {body}
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-Br'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}> inverter</button>
    </div>
  );
}
export default App;
