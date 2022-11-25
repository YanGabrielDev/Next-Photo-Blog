import { SetStateAction } from "react"
import styled, { css } from "styled-components"
import { ThemeInterface } from "../../styles/theme/interface"
import Link from "next/link"

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
export const Menu = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 77%;
    display: flex;
    flex-direction: column;
  `}
`
export const MenuLink = styled(Link)`
  ${({ theme }: ThemeInterface) => css`
    width: 100%;
    height: 30px;
    display: flex;
    gap: 25px;
    color: ${theme.colors?.white};
    align-items: center;
    letter-spacing: 2px;
    padding: 3px 12px;
    margin-top: 1rem;
    text-decoration: none;
  `}
`

export const Footer = styled.footer`
${({theme}: ThemeInterface) =>css`
height: 50px;
width: 100%;
display: flex;
justify-content: space-around;
`}
`
