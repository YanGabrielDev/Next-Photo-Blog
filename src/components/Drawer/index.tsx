import Close from "../../../Assets/Icons/Close"
import { Button } from "../Button"
import * as Styled from "./styles"
import { DrawerInterface } from "./styles"
import {Home, Info} from '@mui/icons-material'
import LinkedinIcon from "../../../Assets/Icons/linkedin"
import GithubIcon from "../../../Assets/Icons/github"
export const Drawer = ({ isOpen, onClose }: DrawerInterface) => {
  return (
    <>
    
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
      <Styled.Menu>
        <Styled.MenuLink href={"/MyHome"}>
          <Home/> <p>Home</p>
        </Styled.MenuLink>
        <Styled.MenuLink href={"/About"}>
          <Info/> <p>About</p>
        </Styled.MenuLink>
    </Styled.Menu>
      <Styled.Footer>
      <a
                href="https://www.linkedin.com/in/yan-gabriel-07ba581b4/"
                target={"_blank"}
                rel="noreferrer"
              >
                <LinkedinIcon height="30" width="30" />
              </a>
              <a
                href="https://github.com/YanGabrielDev"
                target={"_blank"}
                rel="noreferrer"
              >
                <GithubIcon height="30" width="30" />
              </a>
      </Styled.Footer>
    </Styled.Container>
    </>
  )
}
