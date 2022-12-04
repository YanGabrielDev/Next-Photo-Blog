import styled, { css } from "styled-components"
import { ThemeInterface } from "../../styles/theme/interface"

export const Container = styled.div`
  ${({ theme }: ThemeInterface) => css`
    display: flex;
    justify-content: center;
  `}
`
export const ContentForm = styled.div`
  ${({ theme }: ThemeInterface) => css`
    background: ${theme.colors?.black};
    border-radius: 24px;
    margin-bottom: 5rem;
    margin-top: 5rem;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px ${theme.colors?.gray};
    overflow: hidden;
  `}
`

export const Form = styled.form`
  ${({ theme }: ThemeInterface) => css`
    display: flex;
    justify-content: center;
  `}
`

export const Input = styled.input`
  ${({ theme }: ThemeInterface) => css`
    width: 457px;
    font-size: 22px;
    outline: none;
    background-color: ${theme.colors?.black};
    color: ${theme.colors?.white};
    border: none;
    @media (max-width: 560px){
      width: 250px;
    }
  `}
`
export const Button = styled.button`
  ${({ theme }: ThemeInterface) => css`
    padding-right: 8px;
    padding-left: 8px;
    border: none;
    outline: none;
    background: ${theme.colors?.black};
    color: ${theme.colors?.white};
  `}
`
