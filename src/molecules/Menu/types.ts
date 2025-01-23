import { Menu, GetProps } from 'antd';
import { ComponentToken as MenuComponentTokenAntd } from 'antd/es/menu/style';

//#region Define Ant Design types
type MenuProps = GetProps<typeof Menu>;
//#endregion

//#region Define extended component tokens
type MenuComponentTokenExtend = {};
//#endregion

//#region Define extended types
type MenuPropsExtend = {};
//#endregion

//#region Export types
export type RdMenuProps = MenuProps & MenuPropsExtend;
export type RdMenuComponentToken = MenuComponentTokenAntd & MenuComponentTokenExtend;
//#endregion
