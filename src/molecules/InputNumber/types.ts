import { InputNumberProps } from 'antd';
import { RdRegistryControlField } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';

export interface RdInputNumberProps extends InputNumberProps, RdLabelFieldWrapperProps {}

export interface RdInputNumberControlProps
    extends Omit<RdInputNumberProps, 'name'>,
        RdRegistryControlField {}
