import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

// import settingsReducer from "./settingsReducer";
import userReducer from "./userReducer";
// import commsReducer from "./commsReducer";
// import eventsReducer from "./eventsReducer";
// import dataReducer from "./dataReducer";
import itemsReducer from "./itemsReducer";
const middleware = [promiseMiddleware];
const store = createStore(
  combineReducers({ itemsReducer, userReducer }),

  applyMiddleware(...middleware)
);

export default store;
