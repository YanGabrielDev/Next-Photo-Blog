import { Container } from "./styles"
import { ButtonInterface } from "../../interfaces/Button.interface"
export const Button = ({
  background,
  fontSize,
  color,
  children,
  border,
  position,
  onClick,
}: ButtonInterface) => {
  return (
    <Container
      background={background}
      color={color}
      fontSize={fontSize}
      border={border}
      position={position}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}
