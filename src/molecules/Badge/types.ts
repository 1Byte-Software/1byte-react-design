import { Badge, GetProps } from 'antd';
import { ComponentToken as BadgeComponentTokenAntd } from 'antd/es/badge/style';

//#region Define Ant Design types
type BadgeProps = GetProps<typeof Badge>;
//#endregion

//#region Define extended component tokens
type BadgeComponentTokenExtend = {};
//#endregion

//#region Define extended types
type BadgePropsExtend = {};
//#endregion

//#region Export types
export type RdBadgeProps = BadgeProps & BadgePropsExtend;
export type RdBadgeComponentToken = BadgeComponentTokenAntd & BadgeComponentTokenExtend;
//#endregion
