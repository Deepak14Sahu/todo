import { configureStore } from "@reduxjs/toolkit";
import ListReducers from "../features/ListSlice";

const store = configureStore({
  reducer: {
    todo: ListReducers,
  },
});

export default store;
