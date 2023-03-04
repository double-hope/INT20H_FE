import { css } from '@emotion/react';

export const wrapper = () => css`
    height: 100vh;
`;

export const aboutContainer = () => css`
    display: flex;
    gap: 50px;
    background-color: black;
    padding: 50px;
    border-radius: 50px;
    font-weight: 900;
    color: #FFFFFF;
    margin-bottom: 40px;

    & h1 {
        font-size: 80px;
    }
    & p {
        font-weight: 200;
        font-size: 20px;
    }
`;

export const about = () => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

export const forWhom = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const cards = () => css`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`;