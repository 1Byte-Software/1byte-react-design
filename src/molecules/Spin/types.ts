import { Spin, GetProps } from 'antd';
import { ComponentToken as SpinComponentTokenAntd } from 'antd/es/spin/style';

//#region Define Ant Design types
type SpinProps = GetProps<typeof Spin>;
//#endregion

//#region Define extended component tokens
type SpinComponentTokenExtend = {};
//#endregion

//#region Define extended types
type SpinPropsExtend = {};
//#endregion

//#region Export types
export type RdSpinProps = SpinProps & SpinPropsExtend;
export type RdSpinComponentToken = SpinComponentTokenAntd & SpinComponentTokenExtend;
//#endregion
