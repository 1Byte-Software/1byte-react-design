import { Tabs, GetProps } from 'antd';
import { ComponentToken as TabsComponentTokenAntd } from 'antd/es/tabs/style';

//#region Define Ant Design types
type TabsProps = GetProps<typeof Tabs>;
//#endregion

//#region Define extended component tokens
type TabsComponentTokenExtend = {};
//#endregion

//#region Define extended types
type TabsPropsExtend = {};
//#endregion

//#region Export types
export type RdTabsProps = TabsProps & TabsPropsExtend;
export type RdTabsComponentToken = TabsComponentTokenAntd & TabsComponentTokenExtend;
//#endregion
