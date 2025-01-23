import styled from '@emotion/styled';
import { Typography } from 'antd';
import { getComponentOrGlobalToken } from '../../utils/token';
import { RdTypographyTextProps, RdTypographyTitleProps } from './types';
import { css } from '@emotion/react';
import { getExcludeForwardProps } from '../../utils/styles';

export const TypographyLinkStyles = styled(Typography.Link)``;

export const TypographyTitleStyles = styled(Typography.Title, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdTypographyTitleProps>(
            ['disableMargin'] as (keyof RdTypographyTitleProps)[],
            prop
        ),
})<RdTypographyTitleProps>`
    ${({ disableMargin }) => {
        return (
            disableMargin &&
            css`
                margin-bottom: 0 !important;
            `
        );
    }}
`;

export const TypographyTextStyles = styled(Typography.Text)<Pick<RdTypographyTextProps, 'size'>>`
    ${({ size }) => {
        switch (size) {
            case 'small':
                return `
                    font-size: ${getComponentOrGlobalToken('Typography', 'fontSizeSM')}px;
                `;
            // Case normal is the default size
        }
    }}
`;

export const TypographyParagraphStyles = styled(Typography.Paragraph)``;
