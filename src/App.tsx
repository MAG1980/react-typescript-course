import { TodoList } from "./components/TodoList";
import { NewTodo } from "@/features/Todo/NewTodo";
import { AsyncTodoList } from "@/features/AsyncTodo/AsyncTodoList";
import { NewAsyncTodo } from "@/features/AsyncTodo/NewAsyncTodo";

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
      <hr/>
      <NewAsyncTodo/>
      <AsyncTodoList/>
    </>
  )
}

export default App
