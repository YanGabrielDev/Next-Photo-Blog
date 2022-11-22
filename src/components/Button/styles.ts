import styled, { css } from "styled-components";
import { ButtonInterface } from "../../interfaces/Button.interface";

export const Container = styled.button<ButtonInterface>`
${({background, fontSize, color, border, position}: ButtonInterface) => css`
 font-size: ${fontSize};
 background-color: ${background};
 color: ${color};
 border: ${border};
 position: ${position};
 padding: 1rem;
`}
`