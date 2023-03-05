import { css } from '@emotion/react';

export const wrapper = () => css`
    padding: 30px;
    & h3 {
        text-align: center;
        font-weight: 900;
    }
`;

export const container = () => css`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 30px;
    margin-top: 20px;
`;

export const aboutUser = () => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;

    & div {
        box-shadow: 0 0 5px #85858560;
        border-radius: 5px;
        font-weight: 900;
        font-size: 25px;
        padding: 10px;
    }
`;

export const aboutTeam = () => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const experience = () => css`
    & p {
        font-size: 14px !important;
    }
`;

export const myTeam = () => css`
    background-color: #171333;
    border-radius: 5px;
    color: #FFFFFF;
    padding: 10px;
`;

export const member = () => css`
    background-color: white;
    color: #171333;
    border-radius: 20px;
    padding: 10px 15px;
    max-width: 200px;
    margin: 10px 0;
    font-weight: 900;
`;

export const myProjects = () => css`
    background-color: #171333;
    border-radius: 5px;
    color: #FFFFFF;
    padding: 10px;
`;

export const members = () => css`
    display: flex;
    align-items: center;
    
    & * {
        flex-grow: 1;
    }
`;