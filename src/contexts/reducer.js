import React, { createContext, useReducer } from "react";
import { SELECTED_FILE, SET_FILE } from "./types";
import { fileActions } from "./actions";

export const DataContext = createContext();

const initialState = {};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_FILE:
      return {
        [action.key]: action.payload
      };

    case SELECTED_FILE:
      return fileActions(state, action);

    default:
      return state;
  }
};

function DataContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={[state, dispatch]}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
