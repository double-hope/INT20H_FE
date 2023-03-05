import { css } from "@emotion/react";

export const card = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-width: 200px;
    font-weight: 900;
    font-size: 20px;
    color: #2D3C59;
`;

export const content = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #AE9AFF;
    width: 100%;
    border-radius: 20px;
    padding: 15px;
`;