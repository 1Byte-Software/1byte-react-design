import { forwardRef, useState } from 'react';
import { Layout } from '../../molecules';
import DashboardTemplateFooter from './Footer';
import DashboardTemplateHeader from './Header';
import DashboardTemplateSider from './Sider';
import {
    DashboardTemplateContent,
    DashboardTemplateSkeletonLayout,
    DashboardTemplateStyles,
} from './styles';
import { RdDashboardTemplateComponent, RdDashboardTemplateCompoundedComponent } from './types';

const DashboardTemplateInternal: RdDashboardTemplateComponent = forwardRef((props, ref) => {
    const {
        headerProps = null,
        siderProps = null,
        footerProps = null,
        fitScreen = false,
        ...restProps
    } = props;
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleSider = () => {
        setCollapsed(!collapsed);
    };

    const renderFullHeightLayout = () => (
        <DashboardTemplateStyles
            ref={ref}
            fitScreen={fitScreen}
            hasSider={Boolean(siderProps)}
            {...restProps}
        >
            {siderProps && (
                <DashboardTemplateSider
                    collapsed={collapsed}
                    toggleSider={handleToggleSider}
                    {...siderProps}
                />
            )}
            <Layout>
                {headerProps && (
                    <DashboardTemplateHeader
                        collapsed={collapsed}
                        toggleSider={handleToggleSider}
                        {...headerProps}
                    />
                )}
                <DashboardTemplateSkeletonLayout>
                    <DashboardTemplateContent fitScreen={fitScreen}>
                        {props.children}
                    </DashboardTemplateContent>
                    {footerProps && <DashboardTemplateFooter {...footerProps} />}
                </DashboardTemplateSkeletonLayout>
            </Layout>
        </DashboardTemplateStyles>
    );
    
    const renderContentHeightLayout = () => (
        <DashboardTemplateStyles ref={ref} fitScreen={fitScreen} {...restProps}>
            {headerProps && (
                <DashboardTemplateHeader
                    collapsed={collapsed}
                    toggleSider={handleToggleSider}
                    {...headerProps}
                />
            )}
            <Layout>
                {siderProps && (
                    <DashboardTemplateSider
                        collapsed={collapsed}
                        toggleSider={handleToggleSider}
                        {...siderProps}
                    />
                )}
                <DashboardTemplateSkeletonLayout hasSider={Boolean(siderProps)}>
                    <DashboardTemplateContent fitScreen={fitScreen}>
                        {props.children}
                    </DashboardTemplateContent>
                    {footerProps && <DashboardTemplateFooter {...footerProps} />}
                </DashboardTemplateSkeletonLayout>
            </Layout>
        </DashboardTemplateStyles>
    );

    const sidebarMode = props.siderProps?.sidebarMode; // 'fullHeight' | 'contentHeight';

    return sidebarMode === 'fullHeight' ? renderFullHeightLayout() : renderContentHeightLayout();
});

export const DashboardTemplate =
    DashboardTemplateInternal as RdDashboardTemplateCompoundedComponent;
DashboardTemplate.Header = DashboardTemplateHeader;
DashboardTemplate.Sider = DashboardTemplateSider;
DashboardTemplate.Footer = DashboardTemplateFooter;
