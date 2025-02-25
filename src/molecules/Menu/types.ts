import { GetProps, Menu } from 'antd';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import { ComponentToken as MenuComponentTokenAntd } from 'antd/es/menu/style';

//#region Define Ant Design types
type MenuPropsAntd = GetProps<typeof Menu>;
type MenuItemPropsAntd = GetProps<typeof Menu.Item>;
type MenuItemGroupPropsAntd = GetProps<typeof Menu.ItemGroup>;
type MenuDividerPropsAntd = GetProps<typeof Menu.Divider>;
type MenuSubMenuPropsAntd = GetProps<typeof Menu.SubMenu>;

type MenuItemTypeAntd = MenuItemType;
type ItemTypeAntd = ItemType;

//#endregion

//#region Define extended component tokens
type MenuComponentTokenExtend = {};
//#endregion

//#region Define extended types
type MenuPropsExtend = {};
type MenuItemPropsExtend = {};
type MenuItemGroupPropsExtend = {};
type MenuDividerPropsExtend = {};
type MenuSubMenuPropsExtend = {};
type MenuItemTypeExtend = {};
type ItemTypeExtend = {};
//#endregion

//#region Export types
export type RdMenuProps = MenuPropsAntd & MenuPropsExtend;
export type RdMenuItemProps = MenuItemPropsAntd & MenuItemPropsExtend;
export type RdMenuItemGroupProps = MenuItemGroupPropsAntd & MenuItemGroupPropsExtend;
export type RdMenuDividerProps = MenuDividerPropsAntd & MenuDividerPropsExtend;
export type RdMenuSubMenuProps = MenuSubMenuPropsAntd & MenuSubMenuPropsExtend;
export type RdMenuItemType = MenuItemTypeAntd & MenuItemTypeExtend;
export type RdItemType = ItemTypeAntd & ItemTypeExtend;

export type RdMenuComponentToken = MenuComponentTokenAntd & MenuComponentTokenExtend;
//#endregion

//#region Define component types
export type RdMenuComponent = React.FC<RdMenuProps>;
export type RdMenuItemComponent = React.FC<RdMenuItemProps>;
export type RdMenuItemGroupComponent = React.ForwardRefExoticComponent<
    Omit<RdMenuItemGroupProps, 'ref'> & React.RefAttributes<HTMLLIElement>
>;
export type RdMenuDividerComponent = React.FC<RdMenuDividerProps>;
export type RdMenuSubMenuComponent = React.FC<RdMenuSubMenuProps>;

export type RdMenuCompoundedComponent = RdMenuComponent & {
    Item: RdMenuItemComponent;
    ItemGroup: RdMenuItemGroupComponent;
    Divider: RdMenuDividerComponent;
    SubMenu: RdMenuSubMenuComponent;
};

//#endregion
