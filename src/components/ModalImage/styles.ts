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
export const modalContent = styled.div`

display: flex;
align-items: center;
justify-content: center;
width: 85%;
height: 100%;
margin: auto;

`
export const close = styled.button`
position: absolute;
top: 15;
right: 35;
color: #f1f1f1;
font-size: 40;
font-weight: bold;
cursor: pointer;

`

