import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Todo } from "@/types";

const initialState: Todo[] = []

const todoSlice = createSlice({
  name: "@todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const NewTodo = {
        id: new Date().getTime(),
        title: action.payload,
        completed: false
      }
      return [...state, NewTodo]
    },
    togglTeodo: (state, action: PayloadAction<Todo['id']>) => {
      const todo = state.find(el => el.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
      return state
    },
    removeTodo: (state, action: PayloadAction<Todo['id']>) => {
      return state.filter(el => el.id === action.payload)
    }
  },
})

export default todoSlice.reducer
export const { addTodo, togglTeodo, removeTodo}=todoSlice.actions