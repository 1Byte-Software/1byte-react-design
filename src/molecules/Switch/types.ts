import { GetProps, Switch } from 'antd';
import { RdRegistryControlField } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';
import { ComponentToken } from 'antd/es/switch/style';

/**
 * @description Override SwitchComponentToken of antd.
 */
export type SwitchComponentToken = ComponentToken & {};

type SwitchProps = GetProps<typeof Switch>;

export interface RdSwitchProps extends SwitchProps, RdLabelFieldWrapperProps {
    /**
     * The value type you want to get from the switch. Default is 'boolean'.
     */
    responseType?: 'number' | 'boolean';
}

export interface RdSwitchControlProps extends Omit<RdSwitchProps, 'name'>, RdRegistryControlField {}
