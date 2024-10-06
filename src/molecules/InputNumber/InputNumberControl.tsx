import { ConfigProviderDesign } from '@/ConfigProviderDesign';
import { TextError } from '@/atomics';
import { IRegistryControlField } from '@/models';
import { InputNumberProps } from 'antd';
import { useController } from 'react-hook-form';
import { LabelField } from '../LabelField';
import { IInputNumberProps } from './InputNumber';
import { InputNumberStyled, InputWrapper } from './styles';

export interface IInputNumberControlProps extends Omit<IInputNumberProps, 'name'>, IRegistryControlField {}

export const InputNumberControl = ({
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
}: IInputNumberControlProps) => {
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
