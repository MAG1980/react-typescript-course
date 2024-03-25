import { createSlice } from "@reduxjs/toolkit"
import { Todo } from "@/types";
import { createTodo, fetchAllTodos, removeTodo } from "@/features/AsyncTodo/todoAsyncActions.ts";

export type TodoSlice = {
  status: 'idle' | 'loading' | 'finished' | 'error',
  list: Todo[]
}

const initialState:TodoSlice = {
  status: 'idle',
  list: []
}

const asyncTodoSlice = createSlice({
  name: "@todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTodos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.status = 'finished'
        state.list = action.payload
      })
      .addCase(fetchAllTodos.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(createTodo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.status = 'finished'
        console.log(action)
        state.list.push(action.payload)
      })
      .addCase(removeTodo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.list = state.list.filter(todo => todo.id !== action.payload)
        state.status = 'finished'
      })
      .addCase(removeTodo.rejected, ( state => {
        state.status = 'error'
      } ))
  }
})

export default asyncTodoSlice.reducer
