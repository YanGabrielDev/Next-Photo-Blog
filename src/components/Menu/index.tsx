import { useState } from "react"
import * as Styled from "./styles"
import { useRouter } from "next/router"
import LinkedinIcon from "../../../Assets/Icons/linkedin"
import GithubIcon from "../../../Assets/Icons/github"
import { useMediaQuery } from "@mui/material"
import { Menu } from "@mui/icons-material"
import { ModalButton } from "../ModalImage/styles"
import { Button } from "../Button"
import { Drawer } from "../Drawer"
export const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const matchesMin = useMediaQuery("(min-width:980px)")
  const hidenLogo = useMediaQuery("(min-width:760px)")
  const matchesMax = useMediaQuery("(max-width:979px)")
  const router = useRouter()
  return (
    <Styled.Container>
      {matchesMax && (
        <>
          <Button
            background="transparent"
            border="none"
            fontSize="2rem"
            color="white"
            position="fixed"
            onClick={() => setIsOpen(true)}
          >
            <Menu fontSize="large" />
          </Button>

          <Drawer isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
        </>
      )}

      <Styled.Menu>
        {hidenLogo && (
          <Styled.Logo>
            <Styled.Image src="/Logo.png" />
            <Styled.Text>NextPhoto</Styled.Text>
          </Styled.Logo>
        )}
        {matchesMin && (
          <>
            <Styled.MenuLink>
              <Styled.LinkMenu
                href={"/"}
                className={router.pathname == "/" ? "active" : ""}
              >
                HOME
              </Styled.LinkMenu>
              <Styled.LinkMenu
                href={"/About"}
                className={router.pathname == "/About" ? "active" : ""}
              >
                ABOUT
              </Styled.LinkMenu>
              <Styled.LinkMenu
                href={"/About"}
                className={router.pathname == "/About" ? "active" : ""}
              >
                GALLERY
              </Styled.LinkMenu>
            </Styled.MenuLink>
            <Styled.Social>
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
            </Styled.Social>
          </>
        )}
      </Styled.Menu>
    </Styled.Container>
  )
}
