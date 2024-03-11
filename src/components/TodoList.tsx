import { FC } from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "../types";

interface TodoListProps {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

export const TodoList: FC<TodoListProps> = ({ todos, setTodos }) => {
  const checkboxClickHandler = (id: Todo['id']) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const deleteTodoHandler = (id: Todo['id']) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          /* id={todo.id}
           title={todo.title}
           completed={todo.completed}*/
          checkboxClickHandler={checkboxClickHandler}
          deleteTodoHandler={deleteTodoHandler}
        />))}
    </ul>
  )
}