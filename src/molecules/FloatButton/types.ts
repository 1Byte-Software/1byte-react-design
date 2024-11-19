import { BackTopProps, FloatButtonProps } from 'antd';

export interface RdFloatButtonProps extends FloatButtonProps {}

export interface RdBackTopProps extends BackTopProps, Omit<FloatButtonProps, 'onClick' | 'target'> {}
