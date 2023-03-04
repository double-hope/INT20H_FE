import { css } from "@emotion/react";

export const form = () => css`
    margin: 20px 0;
`;

export const filter = () => css`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 5px 0;
    & svg {
        color: #AE9AFF;
    }
`;

export const category = () => css`
    background-color: #3361FF;
    border-radius: 20px;
    padding: 5px 15px;
    width: 150px;
    color: white;
`;

export const item = () => css`
    border-radius: 20px;
    padding: 5px 15px;
    border: 2px solid #2D3C59;
    width: 200px;
`;
