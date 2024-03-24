import { createSlice } from "@reduxjs/toolkit"
import { Todo } from "@/types";

type TodoSlice = {
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
})

export default asyncTodoSlice.reducer
