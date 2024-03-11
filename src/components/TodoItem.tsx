import { CSSProperties, FC } from "react";
import { Todo } from "../types";

interface TodoItemProps extends Todo {
  style?: CSSProperties
  checkboxClickHandler: (id: number) => void
  deleteTodoHandler:(id: number)=> void
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
        <input type="checkbox" checked={completed} onClick={() => checkboxClickHandler(id)}/>
        <span>{title}</span>
        <span onClick={()=>deleteTodoHandler(id)}>&times;</span>
        {children}
      </li>
    )
  }