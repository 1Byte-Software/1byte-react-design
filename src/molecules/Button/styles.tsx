import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from 'antd';

export const ButtonStyles = styled(Button)<{
    isCapitalize?: boolean;
    isFull?: boolean;
}>`
    ${({ isCapitalize }) =>
        isCapitalize &&
        css`
            text-transform: capitalize;
        `}
    ${({ isFull }) =>
        isFull &&
        css`
            width: 100%;
        `}
`;
