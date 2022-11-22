import { ReactNode } from "react"

export interface ButtonInterface{
  fontSize?: string,
  background?: string,
  color?: string,
  children: ReactNode | string,
  border?: string
  position?: string
}