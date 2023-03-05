import { css } from "@emotion/react";

export const form = () => css`
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const container = () => css`
    display: flex;
    max-width: 500px;
    flex-wrap: wrap;
    gap: 10px;

    & * {
        flex-grow: 1;
    }
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
    position: relative;
    background-color: #3361FF;
    border-radius: 20px;
    padding: 5px 15px;
    width: 150px;
    color: white;

    & span {
        position: absolute;
        background: white;
        border-radius: 5px;
        border: 2px solid #171333;
        right: 10px;

        &[span-checked='true'] {
            background: #171333;
        }
    }
`;

export const item = () => css`
    border-radius: 20px;
    padding: 5px 15px;
    border: 2px solid #2D3C59;
    width: 200px;
`;
