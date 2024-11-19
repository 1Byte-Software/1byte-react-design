import { InputNumberProps } from 'antd';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { InputNumberStyled, InputWrapper } from './styles';
import { RdInputNumberProps } from './types';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';

export const InputNumber = ({
    label: labelFieldProps,

    ...antdProps
}: RdInputNumberProps) => {
    return (
        <ConfigProviderDesign>
            <InputWrapper>
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <InputNumberStyled {...(antdProps as InputNumberProps)} />
                </ConditionalWrapper>
            </InputWrapper>
        </ConfigProviderDesign>
    );
};
