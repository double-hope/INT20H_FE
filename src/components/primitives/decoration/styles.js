import { css } from '@emotion/react';

export const background = () => css`
    align-self: center;
    display: grid;
    grid-template-columns: repeat(3, 180px);
    grid-template-rows: repeat(2, 180px);

    & div {
        &[rounded-div*='rTop'] {
            border-top-right-radius: 120px;
        }

        &[rounded-div*='lTop'] {
            border-top-left-radius: 120px;
        }

        &[rounded-div*='rBottom'] {
            border-bottom-right-radius: 120px;
        }
        
        &[rounded-div*='lBottom'] {
            border-bottom-left-radius: 120px;
        }
    }
`;

export const blue = () => css`
    background-color: #3361FF;
`;

export const lilac = () => css`
    background-color: #AE9AFF;
`;

export const black = () => css`
    background-color: #000000;
`;

export const white = () => css`
    background-color: #FFFFFF;
`;

export const image = (image) => css`
    background-image: url(${image});
    background-size: cover;
`;