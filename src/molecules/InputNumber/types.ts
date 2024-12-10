import { GetProps, InputNumber } from 'antd';
import { RdRegistryControlField } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';
import { ComponentToken } from 'antd/es/input-number/style';

/**
 * @description Override InputNumberComponentToken of antd.
 */
export type InputNumberComponentToken = ComponentToken & {};

type InputNumberProps = GetProps<typeof InputNumber>;

export interface RdInputNumberProps extends InputNumberProps, RdLabelFieldWrapperProps {}

export interface RdInputNumberControlProps
    extends Omit<RdInputNumberProps, 'name'>,
        RdRegistryControlField {}
