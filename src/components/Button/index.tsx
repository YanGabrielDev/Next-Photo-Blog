import { Container } from "./styles"
import { ButtonInterface } from "../../interfaces/Button.interface"
export const Button = ({
  background,
  fontSize,
  color,
  children,
  border,
  position,
}: ButtonInterface) => {
  return (
    <Container
      background={background}
      color={color}
      fontSize={fontSize}
      border={border}
      position={position}
    >
      {children}
    </Container>
  )
}
