import { CSSProperties, FC } from "react";
import { Todo } from "../types";

interface TodoItemProps extends Todo {
  style?: CSSProperties
  checkboxClickHandler: (id: Todo['id']) => void
  deleteTodoHandler:(id: Todo['id'])=> void
}

export const TodoItem: FC<TodoItemProps> =
  ({
     id,
     title,
     completed,
     children,
     style = {},
     checkboxClickHandler,
     deleteTodoHandler
   }) => {

    return (
      <li
        style={{ color: "red", backgroundColor: "white", ...style }}
      >
        <input type="checkbox" checked={completed} onChange={() => checkboxClickHandler(id)}/>
        <span>{title}</span>
        <span onClick={()=>deleteTodoHandler(id)}>&times;</span>
        {children}
      </li>
    )
  }