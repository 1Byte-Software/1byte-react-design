import { InputNumberProps } from 'antd';
import { ILabelField, LabelField } from '../LabelField';
import { InputNumberStyled, InputWrapper } from './styles';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';

export interface IInputNumberProps extends InputNumberProps, ILabelField {}

export const InputNumber = ({
    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

    ...antdProps
}: IInputNumberProps) => {
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
                    <InputNumberStyled {...(antdProps as InputNumberProps)} />
                </LabelField>
            </InputWrapper>
        </ConfigProviderDesign>
    );
};
