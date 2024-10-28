import { RangePickerProps } from 'antd/es/date-picker';
import { IRegistryRangePickerControlField } from '../../models';
import { ILabelFieldWrapperProps } from '../LabelField/types';

export interface IRangePickerProps extends RangePickerProps, ILabelFieldWrapperProps {}

export interface IRangePickerControlProps
    extends Omit<IRangePickerProps, 'name'>,
        IRegistryRangePickerControlField {}
