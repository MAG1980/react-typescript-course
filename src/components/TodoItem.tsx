import { CSSProperties, FC } from "react";
import { Todo } from "../types";

interface TodoItemProps extends Todo  {
  style?: CSSProperties
}

export const TodoItem: FC<TodoItemProps> = ({ title, completed, children, style={} }) => {

  return (
    <li style={{color:"red",backgroundColor:"white", ...style}}>
      <input type="checkbox" checked={completed}/>
      <span>{ title }</span>
      <span>&times;</span>
      {children}
    </li>
  )
}