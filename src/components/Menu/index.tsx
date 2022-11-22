import { useState } from "react"
import * as Styled from "./styles"
import { useRouter } from "next/router"
import LinkedinIcon from "../../../Assets/Icons/linkedin"
export const Menu = () => {
  const router = useRouter()
  return (
    <Styled.Container>
      <Styled.Menu>
        <Styled.Logo>
          <Styled.Image src="/Logo.png" />
          <Styled.Text>NextPhoto</Styled.Text>
        </Styled.Logo>
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
          <a>
            <LinkedinIcon height="30" width="30" />
          </a>
        </Styled.Social>
      </Styled.Menu>
    </Styled.Container>
  )
}
