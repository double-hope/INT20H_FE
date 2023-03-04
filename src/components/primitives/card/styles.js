import { css } from '@emotion/react';

export const wrapper = () => css`
    background-color: #AE9AFF;
    border-radius: 16px;
    width: 300px;
    height: 200px;
    padding: 30px;
    z-index: 1;
    box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

export const content = () => css`
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    color: #241E51;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    height: 100%;
`;

export const icons = () => css`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    color: #685BC7;
`;