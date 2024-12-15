import { InputNumber, GetProps } from 'antd';
import { ComponentToken as InputNumberComponentTokenAntd } from 'antd/es/input-number/style';

//#region Define props
type InputNumberProps = GetProps<typeof InputNumber>;
//#endregion

//#region Custom component token
type InputNumberComponentTokenExtend = {};
//#endregion

//#region Custom props
type InputNumberPropsExtend = {};
//#endregion

//#region export type
export type RdInputNumberProps = InputNumberProps & InputNumberPropsExtend;

export type RdInputNumberComponentToken = InputNumberComponentTokenAntd &
    InputNumberComponentTokenExtend;
//#endregion
