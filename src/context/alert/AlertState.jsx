import React, { createContext, useContext, useReducer } from "react";
import { REMOVE_ALERT, SET_ALERT } from "../types.js";

import alertReducer from "./alertReducer.jsx";

const AlertContext = createContext();

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Alert
  const setAlert = ({ msg, type }) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

export const useAlertContext = () => {
  const context = useContext(AlertContext);

  if (context === undefined) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }

  return context;
};
