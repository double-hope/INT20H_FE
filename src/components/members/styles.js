import { css } from "@emotion/react";

export const wrapper = () => css`
    margin-left: 350px;
    padding: 30px;
`;

export const membersContainer = () => css`
    display: flex;
    justify-content: space-evenly;
    background: #2D3C59;
    border-radius: 20px;
    padding: 20px;
    gap: 10px;

    & * {
        flex-grow: 1;
    }
`;