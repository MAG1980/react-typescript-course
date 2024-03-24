import { NewItemForm } from "@/components/NewItemForm";
import {useAppDispatch} from "@/hooks/redux-hooks";
import { createTodo } from "@/features/AsyncTodo/todoAsyncActions";

export const NewAsyncTodo = () => {
  const dispatch = useAppDispatch()
  const handleAddTodo = (title:string)=>{
    dispatch(createTodo(title))
  }
  return (
    <>
      <NewItemForm
        placeholder={"add new todo"}
        clickHandler={handleAddTodo}
      />
    </>
  )
}