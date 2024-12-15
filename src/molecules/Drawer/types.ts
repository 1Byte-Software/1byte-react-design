import { Drawer, GetProps } from 'antd';
import { ComponentToken as DrawerComponentTokenAntd } from 'antd/es/drawer/style';

//#region Define props
type DrawerProps = GetProps<typeof Drawer>;
//#endregion

//#region Custom component token
type DrawerComponentTokenExtend = {};
//#endregion

//#region Custom props
type DrawerPropsExtend = {};
//#endregion

//#region export type
export type RdDrawerProps = DrawerProps & DrawerPropsExtend;
export type RdDrawerComponentToken = DrawerComponentTokenAntd & DrawerComponentTokenExtend;
//#endregion
