import { useReducer } from 'react';
import { CounterContext } from './context';
import { data } from './data';
import { reducer } from './reducer';
import { propTypes } from './types';

export const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);
  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = propTypes;
