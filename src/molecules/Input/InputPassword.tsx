import { InputProps } from 'antd';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { InputStyled } from './styles';
import { RdInputPasswordProps } from './types';

export const InputPassword = ({
    label: labelFieldProps,

    ...antdProps
}: RdInputPasswordProps) => {
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