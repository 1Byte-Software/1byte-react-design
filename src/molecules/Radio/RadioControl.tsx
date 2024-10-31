import { Radio as AntdRadio, RadioProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { RadioWrapper } from './styles';
import { IRadioControlProps } from './types';
import { RadioButtonControl } from './RadioButtonControl';
import { RadioGroupControl } from './RadioGroupControl';

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
            <RadioWrapper>
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <AntdRadio
                        {...(antdProps as RadioProps)}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                    />
                </ConditionalWrapper>
                {invalid && <TextError>{error?.message}</TextError>}
            </RadioWrapper>
        </ConfigProviderDesign>
    );
};

RadioControl.Button = RadioButtonControl;
RadioControl.Group = RadioGroupControl;