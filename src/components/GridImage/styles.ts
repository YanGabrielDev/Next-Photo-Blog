import styled, { css } from "styled-components"
import { ThemeInterface } from "../../styles/theme/interface"

export const Container = styled.div`
  margin-bottom: 10rem;
  padding-top: 20rem;
`
export const Grid = styled.div`
  ${({ theme }: ThemeInterface) => css`
    column-count: 4;
    column-gap: 10px;

    @media ${theme.media?.lteLarge}{
      column-count: 3;
    column-gap: 10px;
    }
    @media ${theme.media?.lteMedium}{
      column-count: 2;
      column-gap: 10px;
    }
  `}
`
export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;

  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    border-radius: 10px;

  `}
`;

export const ContentImage = styled.div`
display: inline-block;
padding-bottom: 16px;

`