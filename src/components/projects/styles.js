import { css } from "@emotion/react";

export const wrapper = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-left: 23vw;
    padding: 30px;
    & h1{
        font-size: 50px;
    }
    & h4 {
        color: #3361FF;
    }
`;

export const content = () => css`
    
`;

export const inputContainer = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 300px;
`; 