import { InputNumberProps } from 'antd';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { InputNumberStyled, InputWrapper } from './styles';
import { RdInputNumberProps } from './types';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { forwardRef } from 'react';

export const InputNumber = forwardRef(
    (props: RdInputNumberProps, ref: RdInputNumberProps['ref']) => {
        const {
            label: labelFieldProps,

            ...antdProps
        } = props;
        return (
            <ConfigProviderDesign>
                <InputWrapper>
                    <ConditionalWrapper
                        condition={Boolean(labelFieldProps)}
                        wrapper={LabelField}
                        wrapperProps={labelFieldProps}
                    >
                        <InputNumberStyled ref={ref} {...(antdProps as InputNumberProps)} />
                    </ConditionalWrapper>
                </InputWrapper>
            </ConfigProviderDesign>
        );
    }
);
