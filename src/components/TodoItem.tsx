import { CSSProperties, FC } from "react";
import { Todo } from "../types";

interface TodoItemProps extends Todo {
  style?: CSSProperties
  checkboxClickHandler: (id: number) => void
}

export const TodoItem: FC<TodoItemProps> =
  ({
     id,
     title,
     completed,
     children,
     style = {},
     checkboxClickHandler
   }) => {

    return (
      <li
        style={{ color: "red", backgroundColor: "white", ...style }}
        onClick={() => checkboxClickHandler(id)}
      >
        <input type="checkbox" checked={completed}/>
        <span>{title}</span>
        <span>&times;</span>
        {children}
      </li>
    )
  }