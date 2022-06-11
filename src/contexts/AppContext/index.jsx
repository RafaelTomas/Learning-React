import { createContext, useReducer } from 'react';
import { globalState } from './data';
import { propTypes } from './type';
import { reducer } from './reducer';
import { actions } from './actions';

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = propTypes;
