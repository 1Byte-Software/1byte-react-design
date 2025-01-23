import { InputNumber, GetProps } from 'antd';
import { ComponentToken as InputNumberComponentTokenAntd } from 'antd/es/input-number/style';

//#region Define Ant Design types
type InputNumberProps = GetProps<typeof InputNumber>;
//#endregion

//#region Define extended component tokens
type InputNumberComponentTokenExtend = {};
//#endregion

//#region Define extended types
type InputNumberPropsExtend = {};
//#endregion

//#region Export types
export type RdInputNumberProps = InputNumberProps & InputNumberPropsExtend;

export type RdInputNumberComponentToken = InputNumberComponentTokenAntd &
    InputNumberComponentTokenExtend;
//#endregion
