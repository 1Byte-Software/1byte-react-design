import { forwardRef } from 'react';
import { MenuItemGroupStyles } from './styles';
import { RdMenuItemGroupComponent } from './types';

export const MenuItemGroup: RdMenuItemGroupComponent = forwardRef((props, ref) => {
    return <MenuItemGroupStyles ref={ref} {...props} />;
});
