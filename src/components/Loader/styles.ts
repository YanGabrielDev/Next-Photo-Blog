import styled, {css} from "styled-components"
import {ThemeInterface} from '../../styles/theme/interface'

export const Container = styled.div`
display: flex;
justify-content: center;
`
export const Load = styled.div`
${({theme}: ThemeInterface) => css`
  width:100px;
  height:100px;
  border-radius:50%;
  border:8px solid;
  border-color: ${theme.colors?.white};
  border-right-color: ${theme.colors?.gray};
  animation:s2 1s infinite linear;
  @keyframes s2 {to{transform: rotate(1turn)}}
`}
`