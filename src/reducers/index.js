import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import feedData from "./feedData";
import loginData from "./loginData";
import menu from "./menu";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    feedData,
    loginData,
    menu,
  });
