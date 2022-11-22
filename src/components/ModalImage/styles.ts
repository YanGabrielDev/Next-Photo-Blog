import styled, { css } from "styled-components";

export const Modal = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100vh;
background-color: rgba(0, 0, 0, 0.8);
overflow: auto;

`
export const ModalContent = styled.div`

display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
margin: 0 auto;

`
export const ModalButton = styled.button`
position: absolute;
top: 27px;
right: 34px;
background-color: transparent;
font-size: 40;
font-weight: bold;
cursor: pointer;

`
export const ModalImage = styled.img`
width: auto;
height: auto;

`

