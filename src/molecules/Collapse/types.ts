import { Collapse, GetProps } from 'antd';
import { ComponentToken as CollapseComponentTokenAntd } from 'antd/es/collapse/style';

//#region Define props
type CollapseProps = GetProps<typeof Collapse>;
//#endregion

//#region Custom component token
type CollapseComponentTokenExtend = {};
//#endregion

//#region Custom props
type CollapsePropsExtend = {};
//#endregion

//#region export type
export type RdCollapseProps = CollapseProps & CollapsePropsExtend;

export type RdCollapseComponentToken = CollapseComponentTokenAntd & CollapseComponentTokenExtend;
//#endregion
