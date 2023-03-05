import { css } from "@emotion/react";

export const wrapper = () => css`
    margin-left: 23vw;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const content = () => css`
    display: grid;
    grid-template-columns: 3fr 1fr;
`;

export const zIndex = () => css`
    z-index: 5;
`;

export const buttons = () => css`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

export const icon = () => css`
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
`;

export const itemsWrapper = () => css`
    display: flex;
    justify-content: space-between;
    box-shadow: 19px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    margin: 20px 0;
    padding: 30px;

    background: #171333;
    color: #171333;

    & > div:nth-child(3n+1) {
        background: #AE9AFF;
        border: 1px solid #AE9AFF;
    }
    & > div:nth-child(3n+2) {
        background: #3361FF;
        border: 1px solid #3361FF;
    }
    & > div:nth-child(3n) {
        background: #000000;
        border: 1px solid #FFFFFF;
        color: white;
    }
`;