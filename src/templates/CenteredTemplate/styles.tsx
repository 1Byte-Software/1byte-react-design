import styled from '@emotion/styled';
import { Layout } from '../../molecules';
import { getComponentOrGlobalToken, getExcludeForwardProps, unit } from '../../utils';
import { css } from '@emotion/react';
import { RdCenteredTemplateProps } from './types';

export const CenteredTemplateStyles = styled(Layout, {
    label: 'rd-centered-template',
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdCenteredTemplateProps>(
            ['maxWidth'] as (keyof RdCenteredTemplateProps)[],
            prop
        ),
})`
    ${() => {
        return css`
            background-color: ${getComponentOrGlobalToken('CenteredTemplate', 'colorPrimary')};
        `;
    }}

    width: 100%;
    height: 100vh;
`;

export const CenteredTemplateContent = styled('div', {
    label: 'rd-centered-template-content',
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdCenteredTemplateProps>(
            ['maxWidth'] as (keyof RdCenteredTemplateProps)[],
            prop
        ),
})<{ maxWidth: number }>`
    width: 100%;
    margin: auto;

    ${({ maxWidth }) => {
        return css`
            max-width: ${maxWidth}px;
            background-color: ${getComponentOrGlobalToken('CenteredTemplate', 'colorBgElevated')};
            padding: ${getComponentOrGlobalToken('CenteredTemplate', 'paddingContentVerticalLG')}px
                ${getComponentOrGlobalToken('CenteredTemplate', 'paddingContentHorizontalLG')}px;
            border-radius: ${getComponentOrGlobalToken('CenteredTemplate', 'borderRadius')}px;
        `;
    }}
`;
