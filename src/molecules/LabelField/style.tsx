import { config } from '@/index';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const LabelFieldWrapper = styled.div``;

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
