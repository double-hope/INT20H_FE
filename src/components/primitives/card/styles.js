import { css } from '@emotion/react';

export const wrapper = () => css`
    background-color: #AE9AFF;
    border-radius: 16px;
    width: 200px;
    height: 200px;
    padding: 30px;
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