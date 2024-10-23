import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
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
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <AntdRangePicker {...(antdProps as RangePickerProps)} />
                </ConditionalWrapper>
            </RangePickerWrapper>
        </ConfigProviderDesign>
    );
};
