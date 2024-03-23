import { FC } from "react";
import { TodoItem } from "@/components/TodoItem";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { togglTodo, removeTodo } from "@/features/Todo/todoSlice";
import { Todo } from "@/types";


export const TodoList: FC = () => {
  const todos = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()

  const handleRemoveTodo = (id: Todo['id']) => dispatch(removeTodo(id))
  const handleToggleCompleteTodo = (id: Todo['id']) => dispatch(togglTodo(id))
  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          /* id={todo.id}
           title={todo.title}
           completed={todo.completed}*/
          checkboxClickHandler={handleToggleCompleteTodo}
          deleteTodoHandler={handleRemoveTodo}
        />))}
    </ul>
  )
}