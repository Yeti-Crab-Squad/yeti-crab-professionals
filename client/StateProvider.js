import React, {Component, createContext, useContext, useReducer} from 'react';

// CONTEXT API CODE
export const StateContext = createContext();

// result of useReducer hook is passed on to the Provider => 
// ...so it becomes available in any component in the app component tree
export const StateProvider = ({reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// callback function so we can shorten our useContext call....
export const useStateValue = () => useContext(StateContext);
