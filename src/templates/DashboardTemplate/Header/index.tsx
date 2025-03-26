import { forwardRef } from 'react';
import { DashboardTemplateHeaderStyles } from './styles';
import { RdDashboardTemplateHeaderComponent } from './types';

export const DashboardTemplateHeader: RdDashboardTemplateHeaderComponent = forwardRef(
    (props, ref) => {
        const { children, render, ...restProps } = props;

        if (render) {
            return render({ children, ...restProps });
        }

        return (
            <DashboardTemplateHeaderStyles ref={ref} {...restProps}>
                {children}
            </DashboardTemplateHeaderStyles>
        );
    }
);
export default DashboardTemplateHeader;
