import { configureStore } from "@reduxjs/toolkit";
import addText from "../features/add/addSlice";

const store = configureStore(
  {
    reducer: {
      add: addText,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
