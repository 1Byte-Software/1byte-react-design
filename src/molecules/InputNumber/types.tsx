import { GetProps, InputNumber } from 'antd';
import { ComponentToken as InputNumberComponentTokenAntd } from 'antd/es/input-number/style';

//#region Define Ant Design types
type InputNumberPropsAntd = GetProps<typeof InputNumber>;
//#endregion

//#region Define extended component tokens
type InputNumberComponentTokenExtend = {};
//#endregion

//#region Define extended types
type InputNumberPropsExtend = {};
//#endregion

//#region Export types
export type RdInputNumberProps = InputNumberPropsAntd & InputNumberPropsExtend;

export type RdInputNumberComponentToken = InputNumberComponentTokenAntd &
    InputNumberComponentTokenExtend;
//#endregion

//#region Define component types
export type RdInputNumberComponent = React.FC<RdInputNumberProps>;
//#endregion
