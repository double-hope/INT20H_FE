import { css } from "@emotion/react";

export const category = () => css`
    display: inline-block;
    position: relative;
    text-align: center;
    background-color: #3361FF;
    border-radius: 20px;
    padding: 5px 15px;
    width: 150px;
    color: white;

    & span {
        position: absolute;
        background: white;
        border-radius: 5px;
        border: 2px solid #171333;
        right: 10px;

        &[span-checked='true'] {
            background: #171333;
        }
    }
`;