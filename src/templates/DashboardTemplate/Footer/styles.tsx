import styled from '@emotion/styled';
import { Layout } from 'antd';
import { getComponentOrGlobalToken, getExcludeForwardProps } from '../../../utils';
import { RdDashboardTemplateFooterProps } from './types';
import { css } from '@emotion/react';

export const DashboardTemplateFooterStyles = styled(Layout.Footer, {
    label: 'rd-dashboard-template-footer',
    shouldForwardProp: prop =>
        getExcludeForwardProps<Omit<RdDashboardTemplateFooterProps, 'render'>>(
            [] as (keyof Omit<RdDashboardTemplateFooterProps, 'render'>)[],
            prop
        ),
})<Omit<RdDashboardTemplateFooterProps, 'render'>>`
    ${() => {
        return css`
            border-top: 1px solid
                ${getComponentOrGlobalToken('DashboardTemplate', 'colorBorderSecondary')};
        `;
    }}
`;
