import { InputProps } from 'antd';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { InputStyled, InputWrapper } from './styles';
import { IInputProps } from './types';

export const Input = ({
    label: labelFieldProps,

    ...antdProps
}: IInputProps) => {
    return (
        <ConfigProviderDesign>
            <InputWrapper>
                <LabelField {...labelFieldProps}>
                    <InputStyled {...(antdProps as InputProps)} />
                </LabelField>
            </InputWrapper>
        </ConfigProviderDesign>
    );
};
