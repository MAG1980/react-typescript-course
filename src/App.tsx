import { TodoList } from "./components/TodoList";
import { NewTodo } from "@/features/Todo/NewTodo";

function App() {

  /*  useEffect(() => {
      return () => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
          .then(response => response.json())
          .then((todos: Todo[]) => setTodos(todos))
      };
    }, []);*/


  return (
    <>
      <h1>Vite + React</h1>
      <NewTodo/>
      <TodoList/>
    </>
  )
}

export default App
