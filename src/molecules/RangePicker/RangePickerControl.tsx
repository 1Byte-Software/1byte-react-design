import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import { useController } from 'react-hook-form';
import { LabelField } from '../LabelField';
import { IRangePickerProps } from './RangePicker';
import { RangePickerWrapper } from './styles';
import { IRegistryRangePickerControlField } from '../../models';
import { TextError } from '../../atomics';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';

const { RangePicker: AntdRangePicker } = DatePicker;

export interface IRangePickerControlProps
    extends Omit<IRangePickerProps, 'name'>,
        IRegistryRangePickerControlField {}

export const RangePickerControl = ({
    names,
    control,

    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

    ...antdProps
}: IRangePickerControlProps) => {
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
                <LabelField
                    label={label}
                    labelAxis={labelAxis}
                    required={required}
                    isColon={isColon}
                    labelDescription={labelDescription}
                    widthField={widthField}
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
                </LabelField>
                {(startInvalid || endInvalid) && (
                    <TextError>{startError?.message || endError?.message}</TextError>
                )}
            </RangePickerWrapper>
        </ConfigProviderDesign>
    );
};
