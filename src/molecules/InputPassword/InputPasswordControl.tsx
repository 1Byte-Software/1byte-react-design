import { LabelField, TextError } from '@/designs';
import { IControlField } from '@/models/interfaces/form';
import { InputProps } from 'antd';
import { useController } from 'react-hook-form';
import { IInputPasswordProps } from './InputPassword';
import { InputStyled, InputWrapper } from './styles';
import { ConfigProviderDesign } from '@/ContextProvider';

export interface IInputPasswordControlProps
    extends Omit<IInputPasswordProps, 'name'>,
        IControlField {}

export const InputPasswordControl = ({
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
}: IInputPasswordControlProps) => {
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
