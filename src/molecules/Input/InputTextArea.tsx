import { TextAreaProps } from 'antd/es/input';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { TextareaStyled } from './styles';
import { RdInputTextareaProps } from './types';

export const InputTextArea = ({
    label: labelFieldProps,

    ...antdProps
}: RdInputTextareaProps) => {
    return (
        <ConfigProviderDesign>
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <TextareaStyled {...(antdProps as TextAreaProps)} />
            </ConditionalWrapper>
        </ConfigProviderDesign>
    );
};
