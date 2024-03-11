import { ChangeEvent, FC } from "react";
interface NewTodoFormProps
{
  changeHandler(e:ChangeEvent<HTMLInputElement>):void
  clickHandler():void
  text:string
}
export const NewTodoForm:FC<NewTodoFormProps> = ({changeHandler, text, clickHandler,}) =>
{
  return(
    <>
    <input type={"text"} onChange={changeHandler} value={text}/>
      <button onClick={clickHandler}>Add todo</button>
    </>
  )
}