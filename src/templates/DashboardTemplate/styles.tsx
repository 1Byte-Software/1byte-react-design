import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Layout } from '../../molecules';
import { getAliasToken, getComponentToken } from '../../utils';

export const DashboardTemplateStyles = styled(Layout, {
    label: 'rd-dashboard-template',
})`
    ${() => css`
        background: ${getAliasToken('DashboardTemplate', 'colorBgLayout')};
    `}
`;

export const DashboardTemplateContent = styled(Layout.Content, {
    label: 'rd-dashboard-template-content',
})`
    ${() => css`
        padding: ${getComponentToken('CenteredTemplate', 'contentPadding') || '32px 32px'};
    `}
`;
