import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Layout } from '../../molecules';
import { getAliasToken, getExcludeForwardProps } from '../../utils';
import { RdSplitScreenTemplateProps } from './types';

export const SplitScreenTemplateStyles = styled(Layout, {
    label: 'rd-split-screen-template',
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdSplitScreenTemplateProps>(
            ['maxWidth'] as (keyof RdSplitScreenTemplateProps)[],
            prop
        ),
})`
    ${() => {
        return css`
            background-color: ${getAliasToken('SplitScreenTemplate', 'colorPrimary')};
        `;
    }}

    width: 100%;
    height: 100vh;
`;

export const SplitScreenTemplateContent = styled('div', {
    label: 'rd-split-screen-template-content',
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdSplitScreenTemplateProps>(
            ['maxWidth'] as (keyof RdSplitScreenTemplateProps)[],
            prop
        ),
})<{ maxWidth: number }>`
    width: 100%;
    margin: auto;

    ${({ maxWidth }) => {
        return css`
            max-width: ${maxWidth}px;
            background-color: ${getAliasToken('SplitScreenTemplate', 'colorBgElevated')};
            padding: ${getAliasToken('SplitScreenTemplate', 'paddingContentVerticalLG')}px
                ${getAliasToken('SplitScreenTemplate', 'paddingContentHorizontalLG')}px;
            border-radius: ${getAliasToken('SplitScreenTemplate', 'borderRadius')}px;
        `;
    }}
`;
