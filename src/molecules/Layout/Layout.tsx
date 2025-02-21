import { forwardRef } from 'react';
import { LayoutContent } from './Content';
import { LayoutFooter } from './Footer';
import { LayoutHeader } from './Header';
import { LayoutSider } from './Sider';
import { LayoutStyles } from './styles';
import { RdLayoutComponent, RdLayoutCompoundedComponent } from './types';

export const LayoutInternal: RdLayoutComponent = forwardRef((props, ref) => {
    return <LayoutStyles ref={ref} {...props} />;
});

export const Layout = LayoutInternal as RdLayoutCompoundedComponent;
Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;
Layout.Sider = LayoutSider;
Layout.Footer = LayoutFooter;
