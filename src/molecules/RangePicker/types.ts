import { RangePickerProps } from 'antd/es/date-picker';
import { IRegistryRangePickerControlField } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';

export interface RdRangePickerProps extends RangePickerProps, RdLabelFieldWrapperProps {}

export interface RdRangePickerControlProps
    extends Omit<RdRangePickerProps, 'name'>,
        IRegistryRangePickerControlField {}
