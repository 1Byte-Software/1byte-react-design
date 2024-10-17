import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { RangePickerWrapper } from './styles';
import { IRangePickerProps } from './types';

const { RangePicker: AntdRangePicker } = DatePicker;

export const RangePicker = ({
    label: labelFieldProps,

    ...antdProps
}: IRangePickerProps) => {
    return (
        <ConfigProviderDesign>
            <RangePickerWrapper>
                <LabelField {...labelFieldProps}>
                    <AntdRangePicker {...(antdProps as RangePickerProps)} />
                </LabelField>
            </RangePickerWrapper>
        </ConfigProviderDesign>
    );
};
