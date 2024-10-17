import { InputProps } from 'antd';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { InputStyled, InputWrapper } from './styles';
import { IInputPasswordProps } from './types';

export const InputPassword = ({
    label: labelFieldProps,

    ...antdProps
}: IInputPasswordProps) => {
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
