import { Badge, GetProps } from 'antd';
import { ComponentToken as BadgeComponentTokenAntd } from 'antd/es/badge/style';

//#region Define Ant Design types
type BadgePropsAntd = GetProps<typeof Badge>;
type BadgeRibbonPropsAntd = GetProps<typeof Badge.Ribbon>;
//#endregion

//#region Define extended component tokens
type BadgeComponentTokenExtend = {};
//#endregion

//#region Define extended types
type BadgePropsExtend = {};
type BadgeRibbonPropsExtend = {};
//#endregion

//#region Export types
export type RdBadgeProps = BadgePropsAntd & BadgePropsExtend;
export type RdBadgeRibbonProps = BadgeRibbonPropsAntd & BadgeRibbonPropsExtend;

export type RdBadgeComponentToken = BadgeComponentTokenAntd & BadgeComponentTokenExtend;
//#endregion

//#region Define component types
export type RdBadgeComponent = React.ForwardRefExoticComponent<
    RdBadgeProps & React.RefAttributes<HTMLSpanElement>
>;

export type RdBadgeRibbonComponent = React.FC<RdBadgeRibbonProps>;

export type RdBadgeCompoundedComponent = RdBadgeComponent & {
    Ribbon: RdBadgeRibbonComponent;
};

//#endregion
