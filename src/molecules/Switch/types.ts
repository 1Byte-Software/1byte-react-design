import { SwitchProps } from 'antd';
import { IRegistryControlField } from '../../models';
import { ILabelFieldWrapperProps } from '../LabelField/types';

export interface ISwitchProps extends SwitchProps, ILabelFieldWrapperProps {
    /**
     * The value type you want to get from the switch. Default is 'boolean'.
     */
    responseType?: 'number' | 'boolean';
}

export interface ISwitchControlProps extends Omit<ISwitchProps, 'name'>, IRegistryControlField {}
