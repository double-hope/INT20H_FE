import { css } from '@emotion/react';

export const wrapper = () => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 100vh;

    & h5 {
        position: absolute;
        top: 30px;
        left: 30px;
        font-weight: 900;
    }
`;

export const background = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const start = () => css`
    display: flex;
    justify-content: center;
    align-items: center;

    & h1 {
        font-weight: 900;
        font-size: 100px;
        line-height: 100px;
    }
`;

export const text = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    max-width: 600px;
    gap: 20px;
`;