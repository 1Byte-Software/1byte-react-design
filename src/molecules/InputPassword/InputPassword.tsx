import { InputProps } from 'antd';
import { ILabelField, LabelField } from '../LabelField';
import { InputStyled, InputWrapper } from './styles';
import { ConfigProviderDesign } from '@/ContextProvider';

export interface IInputPasswordProps extends InputProps, ILabelField {}

export const InputPassword = ({
    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

    ...antdProps
}: IInputPasswordProps) => {
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
