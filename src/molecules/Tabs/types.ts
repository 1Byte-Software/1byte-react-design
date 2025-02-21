import { Tabs, GetProps } from 'antd';
import { ComponentToken as TabsComponentTokenAntd } from 'antd/es/tabs/style';

//#region Define Ant Design types
type TabsPropsAntd = GetProps<typeof Tabs>;
type TabsPanePropsAntd = GetProps<typeof Tabs.TabPane>;
//#endregion

//#region Define extended component tokens
type TabsComponentTokenExtend = {};
//#endregion

//#region Define extended types
type TabsPropsExtend = {};
type TabsPanePropsExtend = {};
//#endregion

//#region Export types
export type RdTabsProps = TabsPropsAntd & TabsPropsExtend;
export type RdTabsPaneProps = TabsPanePropsAntd & TabsPanePropsExtend;

export type RdTabsComponentToken = TabsComponentTokenAntd & TabsComponentTokenExtend;
//#endregion

//#region Define component types
export type RdTabsComponent = React.FC<RdTabsProps>;
export type RdTabsPaneComponent = React.FC<RdTabsPaneProps>;

export type RdTabsCompoundedComponent = RdTabsComponent & {
    TabPane: RdTabsComponent;
};
//#endregion
