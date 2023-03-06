import { legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools(); // импорт reduxDevTools

export const store = createStore(reducers, composeEnhancers);