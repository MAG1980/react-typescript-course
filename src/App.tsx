import { TodoItem } from "./components/TodoItem";
import { useEffect, useState } from "react";
import { NewTodoForm } from "./components/NewTodoForm.tsx";
import { Todo } from "./types";

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

  const checkboxClickHandler = (id: number) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <p>{text}</p>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}

          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          checkboxClickHandler={checkboxClickHandler}
        />))}
      <NewTodoForm changeHandler={changeHandler} clickHandler={clickHandler} text={text}/>
    </>
  )
}

export default App
