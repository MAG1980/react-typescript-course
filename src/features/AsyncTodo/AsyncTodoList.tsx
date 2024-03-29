import { FC, useEffect } from "react";
import { TodoItem } from "@/components/TodoItem";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { Todo } from "@/types";
import { selectAsyncTodos } from "@/features/AsyncTodo/asyncTodoSelectors";
import { fetchAllTodos, removeTodo, toggleTodo } from "@/features/AsyncTodo/todoAsyncActions";


export const AsyncTodoList: FC = () => {
  const { list, status } = useAppSelector(selectAsyncTodos)
  const dispatch = useAppDispatch()

  const handleRemoveTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id))
  }
  const handleToggleCompleteTodo = (todoId: Todo['id']) => {
    dispatch(toggleTodo(todoId))
  }

  useEffect(() => {
    dispatch(fetchAllTodos())
    return () => {
    };
  }, [dispatch]);


  return (
    <ul>
      { status === 'loading' && <li>loading...</li> }
      { status === 'error' && <li>error</li> }
      { status === 'finished' && list?.map((todo) => (
        <TodoItem
          key={ todo.id }
          { ...todo }
          /* id={todo.id}
           title={todo.title}
           completed={todo.completed}*/
          checkboxClickHandler={ () => handleToggleCompleteTodo(todo.id) }
          deleteTodoHandler={ () => handleRemoveTodo(todo.id) }
        /> )) }
    </ul>
  )
}