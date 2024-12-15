import { Spin, GetProps } from 'antd';
import { ComponentToken as SpinComponentTokenAntd } from 'antd/es/spin/style';

//#region Define props
type SpinProps = GetProps<typeof Spin>;
//#endregion

//#region Custom component token
type SpinComponentTokenExtend = {};
//#endregion

//#region Custom props
type SpinPropsExtend = {};
//#endregion

//#region export type
export type RdSpinProps = SpinProps & SpinPropsExtend;
export type RdSpinComponentToken = SpinComponentTokenAntd & SpinComponentTokenExtend;
//#endregion
