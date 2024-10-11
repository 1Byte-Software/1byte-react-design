import { InputNumberProps } from 'antd';
import { ILabelField } from '../LabelField';
import { IRegistryControlField } from '../../models';

export interface IInputNumberProps extends InputNumberProps, ILabelField {}

export interface IInputNumberControlProps
    extends Omit<IInputNumberProps, 'name'>,
        IRegistryControlField {}
