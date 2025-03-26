import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getComponentOrGlobalToken } from '../..';
import { Layout } from '../../molecules';

export const DashboardTemplateStyles = styled(Layout, {
    label: 'rd-dashboard-template',
})`
    ${() => css`
        background: ${getComponentOrGlobalToken('DashboardTemplate', 'colorBgLayout')};
    `}
`;
