import { RadioProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { RadioButtonControl } from './RadioButtonControl';
import { RadioGroupControl } from './RadioGroupControl';
import { RadioStyles } from './styles';
import { IRadioControlProps } from './types';

export const RadioControl = ({
    name,
    control,

    label: labelFieldProps,

    ...antdProps
}: IRadioControlProps) => {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <ConfigProviderDesign>
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <RadioStyles
                    {...(antdProps as RadioProps)}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                />
            </ConditionalWrapper>
            {invalid && <TextError>{error?.message}</TextError>}
        </ConfigProviderDesign>
    );
};

RadioControl.Button = RadioButtonControl;
RadioControl.Group = RadioGroupControl;
