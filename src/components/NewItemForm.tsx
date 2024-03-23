import { FC, useRef } from "react";

interface NewItemFormProps {

  clickHandler(text: string): void

  placeholder: string
}

export const NewItemForm: FC<NewItemFormProps> = ({ clickHandler, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    const text = inputRef.current?.value
    if (text) {
      clickHandler(text)
      inputRef.current.value = ''
    }
  }
  return (
    <>
      <input ref={inputRef} type={"text"} placeholder={placeholder}/>
      <button onClick={onClick}>Add todo</button>
    </>
  )
}