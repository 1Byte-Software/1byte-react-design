import { Divider, GetProps } from 'antd';
import { ComponentToken as DividerComponentTokenAntd } from 'antd/es/divider/style';

//#region Define props
type DividerProps = GetProps<typeof Divider>;
//#endregion

//#region Custom component token
type DividerComponentTokenExtend = {};
//#endregion

//#region Custom props
type DividerPropsExtend = {};
//#endregion

//#region export type
export type RdDividerProps = DividerProps & DividerPropsExtend;
export type RdDividerComponentToken = DividerComponentTokenAntd & DividerComponentTokenExtend;
//#endregion
