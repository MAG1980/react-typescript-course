import { useEffect, useState } from "react";
import { NewTodoForm } from "./components/NewTodoForm.tsx";
import { Todo } from "./types";
import { TodoList } from "./components/TodoList";

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  const clickHandler = () => {
    if (todos && text) {
      setTodos([...todos, {
        id: new Date().getTime(),
        title: text,
        completed: false
      }])
      setText('')
    }
  }

  useEffect(() => {
    return () => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then((todos: Todo[]) => setTodos(todos))
    };
  }, []);


  return (
    <>
      <h1>Vite + React</h1>
      <NewTodoForm changeHandler={changeHandler} clickHandler={clickHandler} text={text}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
