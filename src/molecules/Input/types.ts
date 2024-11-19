import { InputProps } from 'antd';
import { RdRegistryControlField } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';

export interface RdInputProps extends InputProps, RdLabelFieldWrapperProps {}

export interface RdInputControlProps extends Omit<RdInputProps, 'name'>, RdRegistryControlField {}
