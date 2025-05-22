import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getComponentOrGlobalToken, getComponentToken } from '../..';
import { Layout } from '../../molecules';

export const DashboardTemplateStyles = styled(Layout, {
    label: 'rd-dashboard-template',
})`
    ${() => css`
        background: ${getComponentOrGlobalToken('DashboardTemplate', 'colorBgLayout')};
    `}
`;

export const DashboardTemplateContent = styled(Layout.Content, {
    label: 'rd-dashboard-template-content',
})`
    ${() => css`
        padding: ${getComponentToken('CenteredTemplate', 'contentPadding') || '32px 32px'};
    `}
`;
