import { Badge, GetProps } from 'antd';
import { ComponentToken as BadgeComponentTokenAntd } from 'antd/es/badge/style';

//#region Define props
type BadgeProps = GetProps<typeof Badge>;
//#endregion

//#region Custom component token
type BadgeComponentTokenExtend = {};
//#endregion

//#region Custom props
type BadgePropsExtend = {};
//#endregion

//#region export type
export type RdBadgeProps = BadgeProps & BadgePropsExtend;
export type RdBadgeComponentToken = BadgeComponentTokenAntd & BadgeComponentTokenExtend;
//#endregion
