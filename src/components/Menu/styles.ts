import styled, {css} from "styled-components";
import { ThemeInterface } from "../../styles/theme/interface";

export const Container = styled.header`

 ${({ theme }: ThemeInterface) => css`
   width: 100%;
   background-color: ${theme.colors?.black};
   height: 9rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   text-align: center;
   color: white;
   font-family: ${theme.fonts.family?.default};
    }
  `}
`

export const Image = styled.img`
 ${({ theme }: ThemeInterface) => css`
   width: auto;
   height: 4rem;
    }
  `}
`
export const Logo = styled.div`
 ${({ theme }: ThemeInterface) => css`
   width: 240px;
   height: 9rem;
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
   height: 9rem;
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
   height: 9rem;
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
   font-size: ${theme.fonts.sizes?.xlarge};
    }
  `}
`