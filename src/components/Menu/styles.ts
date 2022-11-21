import styled, {css} from "styled-components";
import { ThemeInterface } from "../../styles/theme/interface";
import Link from "next/link";

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
   
   &:hover {
      color: ${theme.colors?.white};
    }
    }
  `}
`
