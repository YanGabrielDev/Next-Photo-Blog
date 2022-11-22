import { useState } from "react"
import * as Styled from "./styles"
import { useRouter } from "next/router"
import LinkedinIcon from "../../../Assets/Icons/linkedin"
import GithubIcon from "../../../Assets/Icons/github"
import { useMediaQuery } from "@mui/material"
import { Menu } from "@mui/icons-material"
import { ModalButton } from "../ModalImage/styles"
import { Button } from "../Button"
export const HeaderMenu = () => {
  const matchesMin = useMediaQuery("(min-width:980px)")
  const matchesMax = useMediaQuery("(max-width:979px)")
  const router = useRouter()
  return (
    <Styled.Container>
      <Styled.Menu>
        <Styled.Logo>
          <Styled.Image src="/Logo.png" />
          <Styled.Text>NextPhoto</Styled.Text>
        </Styled.Logo>
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
              >
                <LinkedinIcon height="30" width="30" />
              </a>
              <a href="https://github.com/YanGabriel2022" target={"_blank"}>
                <GithubIcon height="30" width="30" />
              </a>
            </Styled.Social>
          </>
        )}
      </Styled.Menu>
      {matchesMax && (
        <>
          <Button
            background="transparent"
            border="none"
            fontSize="2rem"
            color="white"
            position="fixed"
          >
            <Menu fontSize="large" />
          </Button>
        </>
      )}
    </Styled.Container>
  )
}
