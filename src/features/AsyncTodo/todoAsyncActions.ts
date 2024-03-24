import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "@/types";
import { TodoSlice } from "@/features/AsyncTodo/asyncTodoSlice.ts";

export const fetchAllTodos = createAsyncThunk<
  Todo[],
  undefined,
  {
    state: {
      asyncTodos: TodoSlice
    }
  }
>(
  "todos/fetchTodos",
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    return await response.json()
  },
  {
    condition: (_, { getState }) => {
      const { list, status } = getState().asyncTodos
      if ( status === 'loading' || list.length > 0 ) {
        return false
      }
    }
  }
)

export const createTodo = createAsyncThunk<Todo, string>(
  'todos/createTodod',
  async (text: string) => {
    const NewTodo: Required<Omit<Todo, 'id' | 'children'>> = {
      title: text,
      userId: 1,
      completed: false
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(NewTodo)
    })
    return (await response.json()) as Todo
  }
)