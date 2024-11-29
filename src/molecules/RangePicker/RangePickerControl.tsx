import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import { useController } from 'react-hook-form';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { RangePickerWrapper } from './styles';
import { RdRangePickerControlProps } from './types';

const { RangePicker: AntdRangePicker } = DatePicker;

export const RangePickerControl = ({
    names,
    control,

    label: labelFieldProps,

    ...antdProps
}: RdRangePickerControlProps) => {
    const [startName, endName] = names;

    const {
        field: {
            value: startDateValue,
            onChange: onStartDateChange,
            onBlur: onStartDateBlur,
            ref: startRef,
        },
        fieldState: { invalid: startInvalid, error: startError },
    } = useController({
        name: startName,
        control,
    });

    const {
        field: {
            value: endDateValue,
            onChange: onEndDateChange,
            onBlur: onEndDateBlur,
            ref: endRef,
        },
        fieldState: { invalid: endInvalid, error: endError },
    } = useController({
        name: endName,
        control,
    });

    const handleChange: RangePickerProps['onChange'] = dates => {
        if (dates) {
            onStartDateChange(dates[0]);
            onEndDateChange(dates[1]);
        } else {
            onStartDateChange(null);
            onEndDateChange(null);
        }
    };

    return (
        <ConfigProviderDesign>
            <RangePickerWrapper>
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <AntdRangePicker
                        {...(antdProps as RangePickerProps)}
                        value={[startDateValue, endDateValue]}
                        onChange={handleChange}
                        onBlur={() => {
                            onStartDateBlur();
                            onEndDateBlur();
                        }}
                        ref={node => {
                            startRef(node);
                            endRef(node);
                        }}
                    />
                </ConditionalWrapper>
                {(startInvalid || endInvalid) && (
                    <TextError>{startError?.message || endError?.message}</TextError>
                )}
            </RangePickerWrapper>
        </ConfigProviderDesign>
    );
};
