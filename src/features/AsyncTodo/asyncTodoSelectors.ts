import { RootState } from "@/store";
import { Todo } from "@/types";

export const selectAsyncTodos = (state: RootState) => state.asyncTodos
export const selectAsyncTodosList = (state: RootState) => state.asyncTodos.list
export const selectAsyncTodoById = (state: RootState, todoId: Todo['id']) =>
  state.asyncTodos.list
    .find(todo => todo.id === todoId)
