import { css } from "@emotion/react";

export const wrapper = () => css`
    margin-left: 23vw;
    padding: 30px;

    & > div:first-of-type {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    
    & h1{
        font-size: 50px;
    }
`;

export const membersContainer = () => css`
    display: flex;
    justify-content: space-evenly;
    background: #2D3C59;
    border-radius: 20px;
    padding: 20px;
    gap: 10px;

    & * {
        flex-grow: 1;
    }
`;