import { InputNumberProps } from 'antd';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { InputNumberStyled, InputWrapper } from './styles';
import { IInputNumberProps } from './types';

export const InputNumber = ({
    label: labelFieldProps,

    ...antdProps
}: IInputNumberProps) => {
    return (
        <ConfigProviderDesign>
            <InputWrapper>
                <LabelField {...labelFieldProps}>
                    <InputNumberStyled {...(antdProps as InputNumberProps)} />
                </LabelField>
            </InputWrapper>
        </ConfigProviderDesign>
    );
};
