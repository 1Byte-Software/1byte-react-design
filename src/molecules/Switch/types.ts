import { GetProps, Switch } from 'antd';
import { ComponentToken as SwitchComponentTokenAntd } from 'antd/es/switch/style';

//#region Define Ant Design types
type SwitchPropsAntd = GetProps<typeof Switch>;
//#endregion

//#region Define extended component tokens
type SwitchComponentTokenExtend = {};
//#endregion

//#region Define extended types
type SwitchPropsExtend = {
    /**
     * The value type you want to get from the switch. Default is 'boolean'.
     */
    responseType?: 'number' | 'boolean';
};
//#endregion

//#region Export types
export type RdSwitchProps = SwitchPropsAntd & SwitchPropsExtend;
export type RdSwitchComponentToken = SwitchComponentTokenAntd & SwitchComponentTokenExtend;
//#endregion

//#region Define component types
export type RdSwitchComponent = React.ForwardRefExoticComponent<
    RdSwitchProps & React.RefAttributes<HTMLButtonElement>
>;

export type RdSwitchCompoundedComponent = RdSwitchComponent & {};
//#endregion
