import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First", description: "First todo data", completed: false },
  {
    id: "2",
    title: "Second",
    description: "Second todo data",
    completed: false,
  },
];

const ListSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload);
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo(state, action) {
      const { id, title, description } = action.payload;
      const todoUpdate = state.find((todo) => todo.id === id);
      if (todoUpdate) {
        todoUpdate.title = title;
        todoUpdate.description = description;
      } else console.error(`Todo with ${id} not found`);
    },
    completeTodo(state, action) {
      const todoUpdate = state.find((todo) => todo.id === action.payload.id);
      if (todoUpdate) {
        todoUpdate.completed = !todoUpdate.completed;
      } else {
        console.error(`Todo with id ${action.payload.id} not found`);
      }
    },
  },
});

export const { todoAdded, deleteTodo, updateTodo, completeTodo } =
  ListSlice.actions;
export default ListSlice.reducer;
