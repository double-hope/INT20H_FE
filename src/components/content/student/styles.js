import { css } from '@emotion/react';

export const wrapper = () => css`
    margin-left: 350px;
    padding: 30px;
    & h3 {
        text-align: center;
        font-weight: 900;
    }
`;

export const container = () => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;