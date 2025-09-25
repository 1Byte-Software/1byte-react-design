import { forwardRef } from 'react';
import { DashboardTemplateHeaderContent, DashboardTemplateHeaderStyles } from './styles';
import { RdDashboardTemplateHeaderComponent } from './types';

export const DashboardTemplateHeader: RdDashboardTemplateHeaderComponent = forwardRef(
    (props, ref) => {
        const { children, render, collapsed, toggleSider, ...restProps } = props;

        if (render) {
            return render({ children, ...restProps });
        }

        return (
            <DashboardTemplateHeaderStyles ref={ref} {...restProps}>
                <DashboardTemplateHeaderContent flex={1}>{children}</DashboardTemplateHeaderContent>
            </DashboardTemplateHeaderStyles>
        );
    }
);
export default DashboardTemplateHeader;
