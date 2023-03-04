import { css } from '@emotion/react';

export const wrapper = () => css`
    padding: 20px;
`;

export const container = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & img {
        position: relative;
        top: 30px;
        width: 300px;
        height: 140px;
        object-fit: cover;
        border-radius: 100px 100px 0 0;
        box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;