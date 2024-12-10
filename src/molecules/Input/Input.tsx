import { InputProps } from 'antd';
import { forwardRef } from 'react';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { InputPassword } from './InputPassword';
import { InputTextArea } from './InputTextArea';
import { InputStyled } from './styles';
import { InputCompoundedComponent, RdInputProps } from './types';

export const InputInternal = forwardRef((props: RdInputProps, ref: RdInputProps['ref']) => {
    const {
        label: labelFieldProps,

        ...antdProps
    } = props;

    return (
        <ConfigProviderDesign>
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <InputStyled ref={ref} {...(antdProps as InputProps)} />
            </ConditionalWrapper>
        </ConfigProviderDesign>
    );
});

export const Input = InputInternal as InputCompoundedComponent;

Input.Password = InputPassword;
Input.TextArea = InputTextArea;