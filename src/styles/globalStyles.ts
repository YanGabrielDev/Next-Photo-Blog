import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "./theme/interface";

 export const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-color: ${({theme}: ThemeInterface) => theme.colors?.SoftBlack};
}
a{
    text-decoration: none;
}


 `
