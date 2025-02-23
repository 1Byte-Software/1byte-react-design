import { Drawer, GetProps } from 'antd';
import { ComponentToken as DrawerComponentTokenAntd } from 'antd/es/drawer/style';

//#region Define Ant Design types
type DrawerPropsAntd = GetProps<typeof Drawer>;
//#endregion

//#region Define extended component tokens
type DrawerComponentTokenExtend = {};
//#endregion

//#region Define extended types
type DrawerPropsExtend = {};
//#endregion

//#region Export types
export type RdDrawerProps = DrawerPropsAntd & DrawerPropsExtend;
export type RdDrawerComponentToken = DrawerComponentTokenAntd & DrawerComponentTokenExtend;
//#endregion

//#region Define component types
export type RdDrawerComponent = React.FC<RdDrawerProps>;
//#endregion
