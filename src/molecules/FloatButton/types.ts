import { BackTopProps, FloatButtonProps } from 'antd';

export interface IFloatButtonProps extends FloatButtonProps {}

export interface IBackTopProps extends BackTopProps, Omit<FloatButtonProps, 'onClick' | 'target'> {}
