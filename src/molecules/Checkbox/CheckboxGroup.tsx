import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { CheckboxGroupStyles } from './styles';
import { ICheckboxGroupProps } from './types';

export const CheckboxGroup = ({
    label: labelFieldProps,
    axis = 'horizontal',

    ...antdProps
}: ICheckboxGroupProps) => {
    return (
        <ConfigProviderDesign>
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <CheckboxGroupStyles {...antdProps} axis={axis} />
            </ConditionalWrapper>
        </ConfigProviderDesign>
    );
};
