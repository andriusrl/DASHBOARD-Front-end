import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import LoginData from "./loginData";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    LoginData,
  });
