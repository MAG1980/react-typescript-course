import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "@/features/Todo/todoSlice"
import AsyncTodoReducer from "@/features/AsyncTodo/asyncTodoSlice"

const rootReducer = combineReducers({
  todos: todoReducer,
  asyncTodos: AsyncTodoReducer
})
export const store = configureStore({
  reducer: rootReducer,

})

// export type RootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch