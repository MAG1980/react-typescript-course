import { FC, useEffect } from "react";
import { TodoItem } from "@/components/TodoItem";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { Todo } from "@/types";
import { selectAsyncTodos } from "@/features/AsyncTodo/asyncTodoSelectors";
import { fetchAllTodos, removeTodo } from "@/features/AsyncTodo/todoAsyncActions";


export const AsyncTodoList: FC = () => {
  const { list, status } = useAppSelector(selectAsyncTodos)
  const dispatch = useAppDispatch()

  const handleRemoveTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id))
  }
  const handleToggleCompleteTodo = (id: Todo['id']) => {
    // dispatch(togglTodo(id))
  }

  useEffect(() => {
    dispatch(fetchAllTodos())
    return () => { };
  }, [dispatch, fetchAllTodos]);


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
          checkboxClickHandler={ handleToggleCompleteTodo }
          deleteTodoHandler={ () => handleRemoveTodo(todo.id) }
        /> )) }
    </ul>
  )
}