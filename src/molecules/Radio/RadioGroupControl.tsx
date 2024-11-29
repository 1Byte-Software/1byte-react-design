import { RadioProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { RadioGroupStyles } from './styles';
import { RdRadioGroupControlProps } from './types';

export const RadioGroupControl = ({
    name,
    control,

    label: labelFieldProps,
    axis = 'horizontal',

    ...antdProps
}: RdRadioGroupControlProps) => {
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
                <RadioGroupStyles
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
