import { NewItemForm } from "@/components/NewItemForm";
import {useAppDispatch} from "@/hooks/redux-hooks";
import { addTodo } from "@/features/Todo/todoSlice";

export const NewTodo = () => {
  const dispatch = useAppDispatch()
  const handleAddTodo = (title:string)=>{
    dispatch(addTodo(title))
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