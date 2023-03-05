import { css } from "@emotion/react";

export const container = () => css`
    flex-grow: 1;
`;

export const form = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #171333;
    box-shadow: 19px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    margin-top: 20px;
    padding: 40px;
`;

export const input = () => css`
    background: #AE9AFF;
    border-radius: 20px;
    padding: 10px 15px;
    width: 100%;
    & * {
        margin: 5px 0;
    }

    & textarea {
        resize: none;
    }
`;

export const description = () => css`
    background: white;
    border-radius: 20px;
    padding: 10px 15px;
    width: 100%;
    
    & * {
        margin: 5px 0;
    }

    & textarea {
        resize: none;
    }
`;

export const currentProject = () => css`
    display: inline-block;
    background: #FFFFFF;
    border-radius: 18px;
    color: #685BC7;
    padding: 10px 20px;
    align-self: start;
`;

export const wrapper = () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
`;

export const find = () => css`
    background-color: #171333;
    box-shadow: 19px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    padding: 40px;
    flex-grow: 1;
    color: white;
    cursor: pointer;
`;