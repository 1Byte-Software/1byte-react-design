import { SwitchProps } from 'antd';
import { RdRegistryControlField } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';

export interface RdSwitchProps extends SwitchProps, RdLabelFieldWrapperProps {
    /**
     * The value type you want to get from the switch. Default is 'boolean'.
     */
    responseType?: 'number' | 'boolean';
}

export interface RdSwitchControlProps extends Omit<RdSwitchProps, 'name'>, RdRegistryControlField {}
