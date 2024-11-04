import { RadioButtonProps } from 'antd/es/radio/radioButton';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { RadioButtonStyles } from './styles';
import { IRadioButtonControlProps } from './types';

export const RadioButtonControl = ({
    name,
    control,

    label: labelFieldProps,

    ...antdProps
}: IRadioButtonControlProps) => {
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
                <RadioButtonStyles
                    {...(antdProps as RadioButtonProps)}
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
