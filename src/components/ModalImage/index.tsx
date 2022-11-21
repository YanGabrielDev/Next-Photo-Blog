import { ReactNode } from "react"
import * as Styled from "./styles"
export interface ModalInterface {
  children?: ReactNode
  onOpen?: React.MouseEventHandler
  onClose?: React.MouseEventHandler
}
export const Thumbnail = ({ children, onOpen }: ModalInterface) => {
  return <div onClick={onOpen}>{children}</div>
}

export const ModalContent = ({ onClose, children }: ModalInterface) => {
  return (
    <Styled.Modal>
      <Styled.close onClick={onClose}>aqui</Styled.close>
      <Styled.modalContent>{children}</Styled.modalContent>
    </Styled.Modal>
  )
}
