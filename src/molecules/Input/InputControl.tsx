import { LabelField, TextError } from '@/designs';
import { IControlField } from '@/models/interfaces/form';
import { InputProps } from 'antd';
import { useController } from 'react-hook-form';
import { IInputProps } from './Input';
import { InputStyled, InputWrapper } from './styles';
import { ConfigProviderDesign } from '@/ContextProvider';

export interface IInputControlProps extends Omit<IInputProps, 'name'>, IControlField {}

export const InputControl = ({
    name,
    control,

    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

    ...antdProps
}: IInputControlProps) => {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
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
