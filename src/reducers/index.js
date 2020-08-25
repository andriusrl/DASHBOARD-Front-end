import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import feedData from "./feedData";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    feedData,
  });
