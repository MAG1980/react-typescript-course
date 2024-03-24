import { ReactNode } from "react";

export interface Todo {
  id: number
  title: string
  completed: boolean
  children?: ReactNode
  userId?: number
}