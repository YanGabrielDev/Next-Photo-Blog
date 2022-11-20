import styled, { css, ThemeConsumer } from "styled-components";
import { ThemeInterface } from "../../styles/theme/interface";
import { theme } from "../../styles/theme/theme";

export const Container = styled.footer`
${({theme}: ThemeInterface) => css`
width: 100%;
background-color: ${theme.colors?.black};
border-top:1px solid rgba(255, 255, 255, 0.15);
height: 8rem;
display: flex;
align-items: center;
color: white;
`}
`
export const Content = styled.div`
${({theme}: ThemeInterface) => css`
display: flex;
text-align: center;
justify-content: center;
width: 760px;
margin: 0 auto;
flex-direction: column;
height: 6rem;
`}
`