import { InputProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { InputPasswordControl } from './InputPasswordControl';
import { InputTextareaControl } from './InputTextAreaControl';
import { InputStyled } from './styles';
import {
    InputControlCompoundedComponent,
    RdInputControlProps
} from './types';

export const InputControlInternal = ({
    name,
    control,
    defaultValue,

    label: labelFieldProps,

    ...antdProps
}: RdInputControlProps) => {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
        defaultValue,
    });

    return (
        <ConfigProviderDesign>
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <InputStyled
                    {...(antdProps as InputProps)}
                    value={value === undefined ? '' : value}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                />
                {invalid && <TextError>{error?.message}</TextError>}
            </ConditionalWrapper>
        </ConfigProviderDesign>
    );
};

export const InputControl = InputControlInternal as InputControlCompoundedComponent;

InputControl.Password = InputPasswordControl;
InputControl.TextArea = InputTextareaControl;
