import { Radio as AntdRadio, RadioProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { RadioWrapper } from './styles';
import { IRadioGroupControlProps } from './types';

export const RadioGroupControl = ({
    name,
    control,

    label: labelFieldProps,

    ...antdProps
}: IRadioGroupControlProps) => {
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
                    <AntdRadio.Group
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
