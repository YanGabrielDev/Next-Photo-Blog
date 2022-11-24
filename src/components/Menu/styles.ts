import styled, {css} from "styled-components";
import { ThemeInterface } from "../../styles/theme/interface";
import Link from "next/link";
export interface OpenDrawer  {
  isOpen?: boolean;
};

export const Menu =  styled.div`
${({ theme }: ThemeInterface) => css`
  width: 100%;
  background-color: ${theme.colors?.black};
  height: 6rem;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  @media ${theme.media?.lteLarge}{
      justify-content: center;
    }
   }
 `}
`

export const Container = styled.header`
 ${({ theme }: ThemeInterface) => css`
   width: 100%;
   background-color: ${theme.colors?.black};
   height: 8rem;
   display: flex;
   color: white;
   font-family: ${theme.fonts.family?.default};
   position: fixed;
   align-items: center;
   z-index: 1;
   
    }
  `}
`

export const Image = styled.img`
 ${({ theme }: ThemeInterface) => css`
   width: auto;
   height: 3rem;
    }
  `}
`
export const Logo = styled.div`
 ${({ theme }: ThemeInterface) => css`
   width: 174px;
   height: 3rem;
   display: flex;
   text-align: center;
   align-items: center;
   justify-content: space-between;
    }
  `}
`
export const MenuLink = styled.div`
 ${({ theme }: ThemeInterface) => css`
   width: 340px;
   height: 3rem;
   display: flex;
   text-align: center;
   align-items: center;
   grid-gap: 26px;
   justify-content: center;
    }
  `}
`
export const Social = styled.div`
 ${({ theme }: ThemeInterface) => css`
   width: 240px;
   height: 3rem;
   display: flex;
   text-align: center;
   align-items: center;
   grid-gap: 26px;
   justify-content: center;
    }
  `}
`

export const Text = styled.h3`
 ${({ theme }: ThemeInterface) => css`
   font-size: ${theme.fonts.sizes?.large};
    }
  `}
`
export const LinkMenu = styled(Link)`
 ${({ theme }: ThemeInterface) => css`
   color: ${theme.colors?.gray};
   cursor: pointer;
   text-decoration: none;
   &:hover {
      color: ${theme.colors?.white};
    }
    &.active{
    color: ${theme.colors?.white};
  }
    }
 
  `}
`
export const drawer = styled.nav<OpenDrawer>`
${({theme, isOpen}) => css`
background-color: ${theme.colors.black};
width: ${ isOpen ? "220px" : "0px"};
height: 100vh;
position: fixed;
overflow: hidden;
top: 0;
left: 0;
transition: width 0.1s;
`}
`
