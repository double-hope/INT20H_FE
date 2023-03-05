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
    background-color: #AE9AFF;
`;

export const buttons = () => css`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    margin-top: 20px;
`;