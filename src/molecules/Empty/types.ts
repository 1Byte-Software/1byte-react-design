import { Empty, GetProps } from 'antd';
import { ComponentToken as EmptyComponentTokenAntd } from 'antd/es/empty/style';
import React from 'react';

//#region Define Ant Design types
type EmptyPropsAntd = GetProps<typeof Empty>;
//#endregion

//#region Define extended component tokens
type EmptyComponentTokenExtend = {};
//#endregion

//#region Define extended types
type EmptyPropsExtend = {};
//#endregion

//#region Export types
export type RdEmptyProps = EmptyPropsAntd & EmptyPropsExtend;

export type RdEmptyComponentToken = EmptyComponentTokenAntd & EmptyComponentTokenExtend;
//#endregion

//#region Define component types
export type RdEmptyComponent = React.FC<RdEmptyProps>;
//#endregion
