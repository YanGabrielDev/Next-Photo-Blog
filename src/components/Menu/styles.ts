import styled, {css} from "styled-components";
import { ThemeInterface } from "../../styles/theme/interface";

export const Container = styled.div`
 ${({ theme }: ThemeInterface) => css`
   width: 100%;
   background-color: ${theme.colors?.black};
   height: 20rem;
    }
  `}
`