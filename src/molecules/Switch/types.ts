import { Switch, GetProps } from 'antd';
import { ComponentToken as SwitchComponentTokenAntd } from 'antd/es/switch/style';

//#region Define props
type SwitchProps = GetProps<typeof Switch>;
//#endregion

//#region Custom component token
type SwitchComponentTokenExtend = {};
//#endregion

//#region Custom props
type SwitchPropsExtend = {
    /**
     * The value type you want to get from the switch. Default is 'boolean'.
     */
    responseType?: 'number' | 'boolean';
};
//#endregion

//#region export type
export type RdSwitchProps = SwitchProps & SwitchPropsExtend;
export type RdSwitchComponentToken = SwitchComponentTokenAntd & SwitchComponentTokenExtend;
//#endregion
