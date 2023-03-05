import { css } from '@emotion/react';

export const wrapper = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    background-color: #171333;
    width: 23vw;
    height: 100%;
    padding: 20px 30px;
    color: white;
`;

export const content = () => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`;

export const user = () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #AE9AFF;
    border-radius: 20px;
    padding: 10px 15px;
    font-weight: 900;
    font-size: 25px;
    color: #171333;
`;

export const role = () => css`
    background-color: white;
    width: 100%;
    border-radius: 20px;
    text-align: center;
    padding: 5px;
    font-size: 14px;
`;

export const navigation = () => css`

`;

export const additional = () => css`

`;

export const extra = () => css`
    font-size: 18px;
`;