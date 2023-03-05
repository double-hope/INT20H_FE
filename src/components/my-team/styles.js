import { css } from "@emotion/react";

export const wrapper = () => css`
    margin-left: 23vw;
    padding: 30px;
    height: 100vh;
`;

export const content = () => css`
    display: grid;
    grid-template-columns: 5fr 1fr;
`;

export const zIndex = () => css`
    z-index: 5;
`;

export const myTeamForm = () => css`
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    background: #fff;
    box-shadow: 23px -23px 45px #FFFFFF, 
                28px 28px 50px rgba(80, 80, 80, 0.25), 
                inset -31px -31px 43px rgba(255, 255, 255, 0.65), 
                inset 26px 26px 48px rgba(119, 119, 119, 0.25);
    border-radius: 30px;
    padding: 40px;
    max-width: 650px;
`;

export const teammate = () => css`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    text-align: center;
    margin: 10px 0;

    & h3 {
        border-left: 2px solid #202B40;
        border-radius: 20px;
        padding: 15px 30px;
    }

    & p {
        background: #3361FF;
        border-radius: 20px;
        padding: 15px 30px;
        font-weight: 900;
        color: white;
    }
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

export const icons = () => css`
    position: absolute;
    right: -100px;
    top: 50%;
    transform: translateY(-50%);
    color: #C3CAD9;

    & * {
        margin: 0 5px;
    }
`;

export const membersContainer = () => css`
    display: flex;
    justify-content: space-evenly;
    background: #2D3C59;
    border-radius: 20px;
    margin: 20px 0;
    padding: 20px;
    gap: 10px;

    & * {
        flex-grow: 1;
    }
`;