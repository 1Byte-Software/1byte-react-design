import { InputProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import { LabelField } from '../LabelField';
import { InputStyled, InputWrapper } from './styles';
import { IInputPasswordControlProps } from './types';

export const InputPasswordControl = ({
    name,
    control,
    defaultValue,

    label: labelFieldProps,

    ...antdProps
}: IInputPasswordControlProps) => {
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
                    <InputStyled
                        {...(antdProps as InputProps)}
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
