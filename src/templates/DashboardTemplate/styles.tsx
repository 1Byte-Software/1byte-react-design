import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Layout } from '../../molecules';
import { getAliasToken, getComponentToken } from '../../utils';

export const DashboardTemplateStyles = styled(Layout, {
    target: 'rd-dashboard-template',
})<{
    fitScreen: boolean;
}>`
    min-height: 100vh;

    ${() => css`
        background: ${getAliasToken('DashboardTemplate', 'colorBgLayout')};
    `}

    ${({ fitScreen }) =>
        fitScreen &&
        css`
            height: 100vh;
        `}
`;

export const DashboardTemplateSkeletonLayout = styled(Layout, {
    target: 'rd-dashboard-template-skeleton',
})``;

export const DashboardTemplateContent = styled(Layout.Content, {
    target: 'rd-dashboard-template-content',
})<{
    fitScreen: boolean;
}>`
    display: flex;
    align-items: stretch;
    
    ${() => css`
        padding: ${getComponentToken('DashboardTemplate', 'contentPadding') || '32px 32px'};
    `}

    ${({ fitScreen }) =>
        fitScreen &&
        css`
            overflow: auto;
        `}
`;
