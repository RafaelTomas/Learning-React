import React, { useContext, useState } from 'react';
import './App.css';

//Estado inicial..
const globalState = {
  title: 'Rafael Tomás',
  body: ' o coro',
  counter: 0,
};

//Criação de um contexto, e um componente React pq precisa chamar um Provider
const GlobalContext = React.createContext();

//Esse value ele vai passar esse valor para todos os filhos dos componentes
function App() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
