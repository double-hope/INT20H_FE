import { css } from '@emotion/react';

export const wrapper = () => css`
    height: 100vh;
`;

export const aboutContainer = () => css`
    display: flex;
    flex-direction: row;
    gap: 50px;
    background-color: black;
    padding: 50px;
    border-radius: 50px;
    font-weight: 900;
    color: #FFFFFF;
    margin-bottom: 40px;

    & h1 {
        font-size: 80px;
    }
    & p {
        font-weight: 200;
        font-size: 20px;
    }

    @media all and (max-width: 900px) {
        flex-direction: column;
    }
`;

export const about = () => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const forWhom = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const cards = () => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
`;

export const posibilities = () => css`
    width: 100%;
    & h1{
        
        text-align: center;
    }
`;

export const additional = () => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 250px;
    gap: 20px;
    place-items: center;
    background: black;
    border-radius: 30px;
    margin: 20px;
    padding: 20px;
`;

export const additionalCard = () => css` 
    background: #3361FF;
    border-radius: 20px;
    color: white;
    height: 100%;
    padding: 20px;

    & h5 {
        background: #FFFFFF;
        border-radius: 20px;
        color: black;
        padding: 10px;
        font-size: 16px;
        text-align: center;
        font-weight: 900;
        margin-bottom: 10px;
    }
`;