import { TodoItem } from "./components/TodoItem";
import { useState } from "react";

type Todo={
  id:number
  title:string
  completed:boolean

}
function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo|null>(null);

  return (
    <>
      <h1>Vite + React</h1>
      <p>{text}</p>
      <div>{todos?.title}</div>
      <TodoItem
        id={111}
        title={"First todo"}
        completed={true}
        style={{border:"1px solid blue"}}
      />
    </>
  )
}

export default App
