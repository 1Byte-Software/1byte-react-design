import { forwardRef } from 'react';
import { DashboardTemplateFooterStyles } from './styles';
import { RdDashboardTemplateFooterComponent } from './types';

export const DashboardTemplateFooter: RdDashboardTemplateFooterComponent = forwardRef(
    (props, ref) => {
        const { children, render, ...restProps } = props;

        if (render) {
            return render({ children, ...restProps });
        }

        return (
            <DashboardTemplateFooterStyles ref={ref} {...restProps}>
                {children}
            </DashboardTemplateFooterStyles>
        );
    }
);
export default DashboardTemplateFooter;
