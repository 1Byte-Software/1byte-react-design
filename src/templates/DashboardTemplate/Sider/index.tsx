import { forwardRef, useState } from 'react';
import { DashboardTemplateSiderStyles } from './styles';
import { RdDashboardTemplateSiderComponent } from './types';

export const DashboardTemplateSider: RdDashboardTemplateSiderComponent = forwardRef(
    (props, ref) => {
        const { children, render, ...restProps } = props;
        const [collapsed, setCollapsed] = useState(false);

        if (render) {
            return render({ children, ...restProps });
        }

        return (
            <DashboardTemplateSiderStyles
                ref={ref}
                width={264}
                collapsedWidth={68}
                collapsible
                collapsed={collapsed}
                onCollapse={value => setCollapsed(value)}
                {...restProps}
            >
                {children}
            </DashboardTemplateSiderStyles>
        );
    }
);
export default DashboardTemplateSider;
