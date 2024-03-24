import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "@/types";

export const fetchAllTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    return await response.json() as Todo[]
  }
)

export const createTodo = createAsyncThunk(
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