import { ReactNode } from "react"
import * as Styled from "./styles"
import Close from "../../../Assets/Icons/Close"

export interface ModalInterface {
  children?: ReactNode
  onOpen?: React.MouseEventHandler
  onClose?: React.MouseEventHandler
  image?: any
}
export const Thumbnail = ({ children, onOpen }: ModalInterface) => {
  return <div onClick={onOpen}>{children}</div>
}

export const ModalContent = ({ onClose, children, image }: ModalInterface) => {
  return (
    <Styled.Modal>
      <Styled.close onClick={onClose}>
        <Close/>
      </Styled.close>
      <Styled.modalContent>
        <Styled.ImageModal src={image}/>
      </Styled.modalContent>
    </Styled.Modal>
  )
}
