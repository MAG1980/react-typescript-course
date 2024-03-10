import { TodoItem } from "./components/TodoItem";

function App() {


  return (
    <>
      <h1>Vite + React</h1>
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
