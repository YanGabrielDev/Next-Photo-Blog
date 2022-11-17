import styled, {css} from "styled-components";
import { ThemeInterface } from "../../styles/theme/interface";

export const Container = styled.div`
 ${({ theme }: ThemeInterface) => css`
   width: 100%;
   background-color: ${theme.colors?.black};
   height: 8rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   text-align: center;
    }
  `}
`

export const Logo = styled.img`
 ${({ theme }: ThemeInterface) => css`
   width: auto;
   height: 4rem;
    }
  `}
`