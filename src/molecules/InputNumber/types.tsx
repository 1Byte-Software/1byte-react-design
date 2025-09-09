import { InputNumberProps } from 'antd';
import { ComponentToken as InputNumberComponentTokenAntd } from 'antd/es/input-number/style';
import type { ValueType } from 'rc-input-number';
import React from 'react';

//#region Define Ant Design types
type InputNumberPropsAntd<T extends ValueType = ValueType> = InputNumberProps<T>;
//#endregion

//#region Define extended component tokens
type InputNumberComponentTokenExtend = {};
//#endregion

//#region Define extended types
type InputNumberPropsExtend = {};
//#endregion

//#region Export types
export type RdInputNumberProps<T extends ValueType = ValueType> = InputNumberPropsAntd<T> &
    InputNumberPropsExtend;

export type RdInputNumberComponentToken = InputNumberComponentTokenAntd &
    InputNumberComponentTokenExtend;
//#endregion

//#region Define component types
export type RdInputNumberInternalComponent = <T extends ValueType = ValueType>(
    props: React.PropsWithChildren<RdInputNumberProps<T>> & React.RefAttributes<HTMLInputElement>
) => React.ReactElement;

export type RdInputNumberComponent = RdInputNumberInternalComponent & {
    displayName?: string;
    _InternalPanelDoNotUseOrYouWillBeFired: React.FC<RdInputNumberProps>;
};
//#endregion
