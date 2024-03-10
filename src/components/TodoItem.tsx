import { CSSProperties, FC, ReactNode } from "react";

interface TodoItemProps {
  id: number
  title: string
  completed: boolean
  children?: ReactNode
  style?: CSSProperties
}

export const TodoItem: FC<TodoItemProps> = ({ title, completed, children, style={} }) => {

  return (
    <li style={{color:"red",backgroundColor:"white", ...style}}>
      <input type="checkbox" checked={completed}/>
      <span>{title}</span>
      <span>$times</span>
      {children}
    </li>
  )
}