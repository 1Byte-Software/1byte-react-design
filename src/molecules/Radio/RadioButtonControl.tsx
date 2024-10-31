import { Radio as AntdRadio, RadioProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { RadioWrapper } from './styles';
import { IRadioButtonControlProps, IRadioControlProps } from './types';
import { RadioButtonProps } from 'antd/es/radio/radioButton';

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
            <RadioWrapper>
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <AntdRadio.Button
                        {...(antdProps as RadioButtonProps)}
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
