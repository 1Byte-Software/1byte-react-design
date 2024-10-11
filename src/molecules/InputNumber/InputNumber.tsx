import { InputNumberProps } from 'antd';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { InputNumberStyled, InputWrapper } from './styles';
import { IInputNumberProps } from './types';

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
