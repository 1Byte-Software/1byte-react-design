import { Tabs, GetProps } from 'antd';
import { ComponentToken as TabsComponentTokenAntd } from 'antd/es/tabs/style';

//#region Define props
type TabsProps = GetProps<typeof Tabs>;
//#endregion

//#region Custom component token
type TabsComponentTokenExtend = {};
//#endregion

//#region Custom props
type TabsPropsExtend = {};
//#endregion

//#region export type
export type RdTabsProps = TabsProps & TabsPropsExtend;
export type RdTabsComponentToken = TabsComponentTokenAntd & TabsComponentTokenExtend;
//#endregion
