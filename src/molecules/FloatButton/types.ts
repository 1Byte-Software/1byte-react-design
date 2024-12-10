import { BackTopProps, FloatButtonGroupProps, FloatButtonProps } from 'antd';
import { ComponentToken } from 'antd/es/float-button/style';

/**
 * @description Override FloatButtonComponentToken of antd.
 */
export type FloatButtonComponentToken = ComponentToken & {};

export interface RdFloatButtonProps extends FloatButtonProps {}

export interface RdBackTopProps
    extends BackTopProps,
        Omit<FloatButtonProps, 'onClick' | 'target'> {}

export interface RdFloatButtonGroupProps extends FloatButtonGroupProps {}
