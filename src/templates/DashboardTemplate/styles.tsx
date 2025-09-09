import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Layout } from '../../molecules';
import { getAliasToken, getComponentToken } from '../../utils';

export const DashboardTemplateStyles = styled(Layout, {
    label: 'rd-dashboard-template',
})<{
    fitScreen: boolean;
}>`
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
    label: 'rd-dashboard-template-skeleton',
})``;

export const DashboardTemplateContent = styled(Layout.Content, {
    label: 'rd-dashboard-template-content',
})<{
    fitScreen: boolean;
}>`
    ${() => css`
        padding: ${getComponentToken('DashboardTemplate', 'contentPadding') || '32px 32px'};
    `}

    ${({ fitScreen }) =>
        fitScreen &&
        css`
            overflow: auto;
        `}
`;
