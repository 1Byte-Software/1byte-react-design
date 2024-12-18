import { css } from '@emotion/react';
import { TAxis } from '../models';

export const getAxisStyles = (axis?: TAxis) => {
    if (axis === 'vertical') {
        return css`
            display: flex;
            flex-direction: column;
        `;
    }
    return css`
        display: flex;
        flex-direction: row;
    `;
};
