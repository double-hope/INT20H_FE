import { css } from "@emotion/react";

export const wrapper = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
    background: #3361FF;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 20px;
    color: white;
    z-index: 10;
    cursor: pointer;
`;

export const notification = () => css`
    position: absolute;
    top: 19px;
    right: 17px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #FF2727;
    border: 2px solid #3361FF;
`;