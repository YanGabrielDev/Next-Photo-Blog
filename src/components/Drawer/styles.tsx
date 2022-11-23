import { SetStateAction } from "react"
import styled, { css } from "styled-components"
import { ThemeInterface } from "../../styles/theme/interface"

export interface DrawerInterface {
  isOpen?: boolean
  onClose?: React.MouseEventHandler<HTMLButtonElement>
}

export const Container = styled.nav<DrawerInterface>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.colors.black};
    width: ${isOpen ? "280px" : "0px"};
    height: 100vh;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    transition: width 0.4s;
    z-index: 11;
  `}
`

export const Header = styled.div`
  height: 5rem;
  width: 252px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Image = styled.img`
  ${({ theme }: ThemeInterface) => css`
   width: auto;
   height: 35px;
    }
  `}
`
export const Logo = styled.div`
  ${({ theme }: ThemeInterface) => css`
   width: 150px;
   height: 3rem;
   display: flex;
   text-align: center;
   align-items: center;
   justify-content: space-between;
    }
  `}
`
export const Text = styled.h3`
  ${({ theme }: ThemeInterface) => css`
   font-size: ${theme.fonts.sizes?.xsmall};
    }
  `}
`
