import { MenuDivider } from './MenuDivider';
import { MenuItem } from './MenuItem';
import { MenuItemGroup } from './MenuItemGroup';
import { MenuStyles } from './styles';
import { RdMenuComponent, RdMenuCompoundedComponent } from './types';

export const MenuInternal: RdMenuComponent = props => {
    return <MenuStyles {...props} />;
};

export const Menu = MenuInternal as RdMenuCompoundedComponent;
Menu.Item = MenuItem;
Menu.ItemGroup = MenuItemGroup;
Menu.Divider = MenuDivider;
Menu.SubMenu = Menu.SubMenu;
