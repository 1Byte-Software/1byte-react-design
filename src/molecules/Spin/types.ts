import { Spin, GetProps } from 'antd';
import { ComponentToken as SpinComponentTokenAntd } from 'antd/es/spin/style';
import React from 'react';

//#region Define Ant Design types
type SpinPropsAntd = GetProps<typeof Spin>;
//#endregion

//#region Define extended component tokens
type SpinComponentTokenExtend = {};
//#endregion

//#region Define extended types
type SpinPropsExtend = {};
//#endregion

//#region Export types
export type RdSpinProps = SpinPropsAntd & SpinPropsExtend;
export type RdSpinComponentToken = SpinComponentTokenAntd & SpinComponentTokenExtend;
//#endregion

//#region Define component types
export type RdSpinComponent = React.FC<RdSpinProps>;
//#endregion
