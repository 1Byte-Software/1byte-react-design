import { RangePickerProps } from 'antd/es/date-picker';
import { IRegistryRangePickerControlField } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';
import { ComponentToken } from 'antd/es/date-picker/style';

/**
 * @description Override DatePickerComponentToken of antd.
 */
export type DatePickerComponentToken = ComponentToken & {};

export interface RdRangePickerProps extends RangePickerProps, RdLabelFieldWrapperProps {}

export interface RdRangePickerControlProps
    extends Omit<RdRangePickerProps, 'name'>,
        IRegistryRangePickerControlField {}
