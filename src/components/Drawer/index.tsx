import Close from "../../../Assets/Icons/Close"
import { Button } from "../Button"
import * as Styled from "./styles"
import { DrawerInterface } from "./styles"
export const Drawer = ({ isOpen, onClose }: DrawerInterface) => {
  return (
    <Styled.Container isOpen={isOpen}>
      <Styled.Header>
        <Styled.Logo>
          <Styled.Image src="/Logo.png" />
          <Styled.Text>NextPhoto</Styled.Text>
        </Styled.Logo>
        <Button
          background="transparent"
          color="white"
          border="none"
          fontSize="2rem"
          onClick={onClose}
        >
          <Close />
        </Button>
      </Styled.Header>
    </Styled.Container>
  )
}
