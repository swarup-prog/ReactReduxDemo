import { configureStore } from "@reduxjs/toolkit";
// you cannot create a store alone
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
