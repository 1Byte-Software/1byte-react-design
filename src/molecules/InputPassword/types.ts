import { InputProps } from 'antd';
import { RdRegistryControlField } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';

export interface RdInputPasswordProps extends InputProps, RdLabelFieldWrapperProps {
}

export interface RdInputPasswordControlProps
    extends Omit<RdInputPasswordProps, 'name'>,
        RdRegistryControlField {}
