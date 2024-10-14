import { InputProps } from 'antd';
import { useController } from 'react-hook-form';
import { LabelField } from '../LabelField';
import { IInputPasswordProps } from './InputPassword';
import { InputStyled, InputWrapper } from './styles';
import { IRegistryControlField } from '../../models';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';

export interface IInputPasswordControlProps
    extends Omit<IInputPasswordProps, 'name'>,
        IRegistryControlField {}

export const InputPasswordControl = ({
    name,
    control,
    defaultValue,

    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

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
                <LabelField
                    label={label}
                    labelAxis={labelAxis}
                    required={required}
                    isColon={isColon}
                    labelDescription={labelDescription}
                    widthField={widthField}
                >
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
