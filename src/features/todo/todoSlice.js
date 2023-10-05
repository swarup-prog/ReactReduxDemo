/*
 * helps you create a big object which you export
 * responsible for tracking initial state of your store
 * all reducers are collected here
 * links reducers and initial state of the store
 * store need to know how to get started or it's initial state
 */

import { createSlice, nanoid } from "@reduxjs/toolkit";
//nano is a value redux provides which is almost like uid (unique id)

const initialState = {
  todos: [{ id: 1, text: "Hello" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    /*
     * two things you should always pass onto the reducer:
     * 1. State: coz reducer should know what is initially in the store or how to update the state
     * 2. action: something through which you can send some data like if you have to delete something, you should pass on some id  thats why you should pass on some data
     */
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  }, //can be multiple reducer which will be responsible for updating the state
});

// you need to export all the reducers you have created as actions
export const { addTodo, removeTodo } = todoSlice.actions;

// this is something that should be wired up with the store
export default todoSlice.reducer;
