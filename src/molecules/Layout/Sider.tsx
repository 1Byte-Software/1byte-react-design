import { forwardRef } from 'react';
import { SiderStyles } from './styles';
import { RdLayoutSiderComponent } from './types';

export const LayoutSider: RdLayoutSiderComponent = forwardRef((props, ref) => {
    return <SiderStyles ref={ref} {...props} />;
});
