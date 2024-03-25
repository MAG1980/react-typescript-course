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
  'todos/createTodo',
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
    return ( await response.json() )
  }
)

export const removeTodo = createAsyncThunk<
  Todo['id'],
  Todo['id'],
  {rejectValue:string}
>(
  'todos/removeTodo',
  async (todoId: Todo['id'], { rejectWithValue }) => {
    console.log("todoId", todoId, typeof todoId)
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${ todoId }`,
      { method: "DELETE", })

    if ( response.status !== 200 ) {
      return rejectWithValue(`todo with id ${ todoId } not found`)
    }

    await response.json()
    return todoId
  }
)

export const toggleTodo = createAsyncThunk<
  Todo['id'],
  Todo
>(
  'todos/toggleTodo',
  async (todo) => {
    console.log('todo', todo)

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${ todo.id }`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify({
            ...todo, completed: !todo.completed
          })
        })
      await response.json()
    } catch ( error ) {
      console.log(error)
    }

    return todo.id
  }
)