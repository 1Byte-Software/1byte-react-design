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
            fixedSiderBreakpoint = 'md',
            sidebarMode = 'fullHeight',
            headerSidebar,
            collapsed,
            fixedOnScroll = true,
            fixedHeaderOnScroll = true,
            render,
            toggleSider,
            ...restProps
        } = props;

        /**
         * `fixedSider` state:
         * - true  → sidebar is displayed as an overlay (does not take layout width).
         * - false → sidebar is displayed normally and occupies width.
         */
        const [fixedSider, setFixedSider] = useState<boolean>(false);
        const siderWidth = getComponentToken('DashboardTemplate', 'siderWidth');

        /**
         * collapsedWidth:
         * - When collapsed in "normal mode" → width = collapsedWidth (e.g. 80px).
         * - When collapsed in "fixed overlay mode" → width = 0 (sider overlays content).
         */
        const [collapsedWith, setCollapsedWidth] = useState<number | string>(
            DEFAULT_COLLAPSED_WIDTH
        );

        /**
         * Two behaviors for the sidebar:
         *
         * 1. Collapse at breakpoint:
         *    - Handled by Ant Design using the `breakpoint` prop (e.g., "lg").
         *    - When screen < breakpoint, the sidebar collapses but still occupies width.
         *
         * 2. Fixed overlay at fixedSiderBreakpoint:
         *    - Custom logic in this component.
         *    - When screen < fixedSiderBreakpoint (e.g., "md"), the sidebar becomes fixed overlay.
         *
         * => Summary:
         * - Antd handles collapsing into a narrow-width sidebar.
         * - This component handles switching to fixed overlay on smaller screens.
         */
        if (render) {
            return render({ children, fixedSiderBreakpoint, ...restProps });
        }

        const screens = Grid.useBreakpoint();

        useEffect(() => {
            // On smaller screens: switch to fixed overlay mode
            if (!screens[fixedSiderBreakpoint]) {
                setFixedSider(true);

                setCollapsedWidth(0);
            } else {
                setFixedSider(false);
                setCollapsedWidth(DEFAULT_COLLAPSED_WIDTH);
            }
        }, [screens[fixedSiderBreakpoint]]);

        return (
            <DashboardTemplateSiderStyles
                ref={ref}
                width={siderWidth || 264}
                collapsedWidth={collapsedWith}
                collapsible
                collapsed={collapsed}
                onCollapse={toggleSider}
                breakpoint={breakpoint}
                fixed={fixedSider}
                fixedSiderBreakpoint={fixedSiderBreakpoint}
                sidebarMode={sidebarMode}
                fixedOnScroll={fixedOnScroll}
                {...restProps}
            >
                {/*
                    Sidebar Header:

                    - Always renders `headerSidebar` (for both "contentHeight" and "fullHeight" modes).
                    - The `headerSidebar` function receives the `collapsed` state
                      so the parent can decide whether to render Logo, Favicon, or other variations.
                    - For "contentHeight": when the screen shrinks into fixed overlay mode,
                      the headerSidebar still renders (at this point, the sider behaves like fullHeight).
                */}
                {(sidebarMode === 'fullHeight' ||
                    (sidebarMode === 'contentHeight' && collapsed)) && (
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
