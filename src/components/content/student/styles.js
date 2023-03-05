import { css } from '@emotion/react';

export const wrapper = () => css`
    padding: 30px;
    & h3 {
        text-align: center;
        font-weight: 900;
    }
`;

export const container = () => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;