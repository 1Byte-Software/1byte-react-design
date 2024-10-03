import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from 'antd';

const { useToken } = theme;

export const Label = styled.label<{ isNotCapitalize?: boolean }>`
    white-space: nowrap;
    display: block;
    margin-bottom: 3px;
    text-align: left;

    ${() => {
        const { token } = useToken();
        return css`
            sup {
                color: ${token.colorError};
            }
        `;
    }}

    ${({ isNotCapitalize }) =>
        isNotCapitalize
            ? css`
                  text-transform: none;
              `
            : css`
                  text-transform: capitalize;
              `}
`;
