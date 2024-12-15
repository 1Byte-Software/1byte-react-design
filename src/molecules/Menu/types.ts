import { Menu, GetProps } from 'antd';
import { ComponentToken as MenuComponentTokenAntd } from 'antd/es/menu/style';

//#region Define props
type MenuProps = GetProps<typeof Menu>;
//#endregion

//#region Custom component token
type MenuComponentTokenExtend = {};
//#endregion

//#region Custom props
type MenuPropsExtend = {};
//#endregion

//#region export type
export type RdMenuProps = MenuProps & MenuPropsExtend;
export type RdMenuComponentToken = MenuComponentTokenAntd & MenuComponentTokenExtend;
//#endregion
