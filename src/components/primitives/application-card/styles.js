import { css } from "@emotion/react";

export const wrapper = () => css`
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 20px;
    max-width: 200px;
    margin: 10px;
    text-align: center;
`;

export const button = () => css`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`;