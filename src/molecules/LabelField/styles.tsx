import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { config } from '../..';
import { Flex } from 'antd';

export const LabelFieldWrapper = styled(Flex)``;

export const Label = styled.label<{ isNotCapitalize?: boolean }>`
    color: ${config.designToken.colorText};
    sup {
        color: ${config.designToken.colorError};
    }

    ${({ isNotCapitalize }) =>
        isNotCapitalize
            ? css`
                  text-transform: none;
              `
            : css`
                  text-transform: capitalize;
              `}
`;

export const LabelDescription = styled.label`
    font-style: italic;
`;
