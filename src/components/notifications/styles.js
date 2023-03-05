import { css } from "@emotion/react";

export const wrapper = () => css`
    margin-left: 23vw;
    padding: 30px;
    height: 100vh;
`;

export const content = () => css`
    display: grid;
    grid-template-columns: 5fr 1fr;
`;

export const zIndex = () => css`
    z-index: 5;
`;

export const notifications = () => css`
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: start;
    border: 2px solid #2D3C59;
    background: #AE9AFF;
    box-shadow: 19px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    padding: 40px;
    max-width: 650px;

    & h4 {
        background: #FFFFFF;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
    }
`;

export const icon = () => css`
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
`;

export const messages = () => css`
    & p {
        background: #2D3C59;
        border-radius: 10px;
        color: white;   
        padding: 10px;
        margin: 10px;
    }
   
`;

export const message = () => css`
    display: flex;
    & span{
        align-self: end;
        margin: 10px;
    }
`;