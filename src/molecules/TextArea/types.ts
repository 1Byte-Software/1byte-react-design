import { TextAreaProps } from 'antd/es/input';
import { RdRegistryControlField } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';

export interface RdTextareaProps extends TextAreaProps, RdLabelFieldWrapperProps {}
export interface RdTextareaControlProps
    extends Omit<RdTextareaProps, 'name'>,
        RdRegistryControlField {}
