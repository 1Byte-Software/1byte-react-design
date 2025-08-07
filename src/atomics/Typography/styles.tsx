import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { getExcludeForwardProps } from '../../utils/styles';
import { RdTypographyParagraphProps, RdTypographyTextProps, RdTypographyTitleProps } from './types';
import { getAliasToken } from '../../utils';

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

export const TypographyTextStyles = styled(Typography.Text, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdTypographyTextProps>(
            ['noWrap', 'size'] as (keyof RdTypographyTextProps)[],
            prop
        ),
})<Pick<RdTypographyTextProps, 'size' | 'noWrap'>>`
    ${({ size }) => {
        switch (size) {
            case 'small':
                return `
                    font-size: ${getAliasToken('Typography', 'fontSizeSM')}px;
                `;
        }
    }}

    ${({ noWrap }) => {
        return (
            noWrap &&
            css`
                text-wrap: nowrap;
            `
        );
    }}
`;

export const TypographyParagraphStyles = styled(Typography.Paragraph, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdTypographyParagraphProps>(
            ['minRows'] as (keyof RdTypographyParagraphProps)[],
            prop
        ),
})<RdTypographyParagraphProps>`
    ${({ minRows }) => {
        return (
            minRows &&
            css`
                min-height: ${Number(getAliasToken('Typography', 'lineHeight')) *
                Number(getAliasToken('Typography', 'fontSize')) *
                minRows}px;
            `
        );
    }}
`;
