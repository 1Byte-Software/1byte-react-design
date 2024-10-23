import { InputProps } from 'antd';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { InputStyled } from './styles';
import { IInputProps } from './types';

export const Input = ({
    label: labelFieldProps,

    ...antdProps
}: IInputProps) => {
    return (
        <ConfigProviderDesign>
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <InputStyled {...(antdProps as InputProps)} />
            </ConditionalWrapper>
        </ConfigProviderDesign>
    );
};
