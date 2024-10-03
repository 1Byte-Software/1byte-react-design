import { ConfigProviderDesign } from '@/ContextProvider';
import { InputProps } from 'antd';
import { ILabelField, LabelField } from '../LabelField';
import { InputStyled, InputWrapper } from './styles';

export interface IInputProps extends InputProps, ILabelField {}

export const Input = ({
    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

    ...antdProps
}: IInputProps) => {
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
                    <InputStyled {...(antdProps as InputProps)} />
                </LabelField>
            </InputWrapper>
        </ConfigProviderDesign>
    );
};
