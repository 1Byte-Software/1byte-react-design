import { InputNumberProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import { LabelField } from '../LabelField';
import { InputNumberStyled, InputWrapper } from './styles';
import { IInputNumberControlProps } from './types';

export const InputNumberControl = ({
    name,
    control,
    defaultValue,

    label: labelFieldProps,

    ...antdProps
}: IInputNumberControlProps) => {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
        defaultValue,
    });

    return (
        <ConfigProviderDesign>
            <InputWrapper>
                <LabelField {...labelFieldProps}>
                    <InputNumberStyled
                        {...(antdProps as InputNumberProps)}
                        value={value === undefined ? '' : value}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                    />
                </LabelField>
                {invalid && <TextError>{error?.message}</TextError>}
            </InputWrapper>
        </ConfigProviderDesign>
    );
};
