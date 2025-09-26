import { forwardRef, useEffect, useState } from 'react';
import { Grid } from '../../../molecules';
import { getComponentToken } from '../../../utils';
import { DEFAULT_COLLAPSED_WIDTH } from './constants';
import {
    DashboardTemplateHeaderSidebarStyled,
    DashboardTemplateSiderContentStyled,
    DashboardTemplateSiderStyles,
} from './styles';
import { RdDashboardTemplateSiderComponent } from './types';

export const DashboardTemplateSider: RdDashboardTemplateSiderComponent = forwardRef(
    (props, ref) => {
        const {
            children,
            breakpoint = 'lg',
            sidebarMode = 'fullHeight',
            headerSidebar,
            collapsed,
            fixedOnScroll = true,
            fixedHeaderOnScroll = true,
            render,
            toggleSider,
            ...restProps
        } = props;
        const [fixed, setFixed] = useState<boolean>(false);
        const siderWidth = getComponentToken('DashboardTemplate', 'siderWidth');
        const [collapsedWith, setCollapsedWidth] = useState<number | string>(
            DEFAULT_COLLAPSED_WIDTH
        );

        if (render) {
            return render({ children, ...restProps });
        }

        const screens = Grid.useBreakpoint();

        useEffect(() => {
            // On smaller screens, we want the sidebar to be fixed and overlay the content
            if (!screens[breakpoint] && sidebarMode === 'fullHeight') {
                setFixed(true);

                if (sidebarMode === 'fullHeight') {
                    setCollapsedWidth(0);
                } else {
                    setCollapsedWidth(DEFAULT_COLLAPSED_WIDTH);
                }
            } else {
                setFixed(false);
                setCollapsedWidth(DEFAULT_COLLAPSED_WIDTH);
            }
        }, [screens[breakpoint]]);

        return (
            <DashboardTemplateSiderStyles
                ref={ref}
                width={siderWidth || 264}
                collapsedWidth={collapsedWith}
                collapsible
                collapsed={collapsed}
                onCollapse={toggleSider}
                breakpoint={breakpoint}
                fixed={fixed}
                sidebarMode={sidebarMode}
                fixedOnScroll={fixedOnScroll}
                {...restProps}
            >
                {sidebarMode === 'fullHeight' && (
                    <DashboardTemplateHeaderSidebarStyled fixedOnScroll={fixedHeaderOnScroll}>
                        {headerSidebar?.(collapsed ?? false)}
                    </DashboardTemplateHeaderSidebarStyled>
                )}

                <DashboardTemplateSiderContentStyled>
                    {children}
                </DashboardTemplateSiderContentStyled>
            </DashboardTemplateSiderStyles>
        );
    }
);
export default DashboardTemplateSider;
