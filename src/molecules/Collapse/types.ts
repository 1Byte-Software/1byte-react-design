import { Collapse, GetProps } from 'antd';
import { ComponentToken as CollapseComponentTokenAntd } from 'antd/es/collapse/style';
import { CollapsePanel } from './CollapsePanel';

//#region Define Ant Design types
type CollapsePropsAntd = GetProps<typeof Collapse>;
type CollapsePanelPropsAntd = GetProps<typeof Collapse.Panel>;
//#endregion

//#region Define extended component tokens
type CollapseComponentTokenExtend = {};
//#endregion

//#region Define extended types
type CollapsePropsExtend = {};
type CollapsePanelPropsExtend = {};
//#endregion

//#region Export types
export type RdCollapseProps = CollapsePropsAntd & CollapsePropsExtend;
export type RdCollapsePanelProps = CollapsePanelPropsAntd & CollapsePanelPropsExtend;

export type RdCollapseComponentToken = CollapseComponentTokenAntd & CollapseComponentTokenExtend;
//#endregion

//#region Define component types
export type RdCollapseInternalComponent = React.ForwardRefExoticComponent<
    RdCollapseProps & React.RefAttributes<HTMLDivElement>
>;

export type RdCollapsePanelComponent = React.ForwardRefExoticComponent<
    RdCollapsePanelProps & React.RefAttributes<HTMLDivElement>
>;

export type RdCollapseCompoundedComponent = typeof Collapse & {
    Panel: typeof CollapsePanel;
};
//#endregion
