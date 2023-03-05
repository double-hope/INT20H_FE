import { css } from "@emotion/react";

export const wrapper = () => css`
    margin-left: 23vw;
    padding: 30px;

`;

export const content = () => css`
    display: grid;
    grid-template-columns: 5fr 1fr;
`;

export const zIndex = () => css`
    z-index: 5;
`;

export const form = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #171333;
    padding: 40px;
    border-radius: 30px;
    position: relative;
    margin: 30px 0;

    & svg {
        position: absolute;
        top: 40px;
        right: 40px;
        color: #AE9AFF;
    }
`;

export const category = () => css`
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 10px;
    margin: 10px 0;

    & h4 {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #AE9AFF;
        border-radius: 20px;
        color: white;
        padding: 10px;
        /* max-width: 200px; */
    }
`;

export const languages = () => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row: span 2;
    gap: 10px;
`;

export const label = () => css`
    display: inline-block;
    background: #3361FF;
    border-radius: 18px;
    padding: 10px 15px;
    color: white;
    font-weight: 900;
`;

export const icon = () => css`
    transform: scale(0.8) translateX(100px);
`;