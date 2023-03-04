import { css } from "@emotion/react"

export const wrapper = () => css`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-auto-rows: 300px;
    border-radius: 20px;
    border: 2px solid #171333;
    box-shadow: 0 0 5px #171333;
    color: #171333;
    margin: 30px 0;
`; 

export const tags = () => css`
    & * {
        margin: 10px 0;
        text-align: center;
    }
`;

export const info = () => css`
    position: relative;
    padding: 20px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis;
    text-align: left; 

    & h2 {
        font-weight: 900;
    }

    & p {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    & h5 {
        position: absolute;
        font-size: 15px;
        bottom: 20px;
        cursor: pointer;
    }
`;

export const tag = () => css`
    border-radius: 20px;
    padding: 5px 15px;
    border: 2px solid #2D3C59;
    width: 200px;
    background-color: white;
`;

export const aside = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #AE9AFF;
    border-radius: 18px;
    border: 2px solid #171333;
`;

export const image = () => css`
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 150px 18px 18px 0;
        border: 2px solid #171333;
    }
`;

export const buttonPosition = () => css`
    position: relative;
    top: 50px;
`;

export const completed = () => css`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
    background-color: #17133350;
    border-radius: 20px;
    cursor: not-allowed;
`;