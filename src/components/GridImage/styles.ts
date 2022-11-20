import styled, { css } from "styled-components"
import { ThemeInterface } from "../../styles/theme/interface"

export const Container = styled.div`
  margin-bottom: 10rem;
`
export const Grid = styled.div`
  ${({ theme }: ThemeInterface) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings?.large};
  `}
`
export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
  `}
`;