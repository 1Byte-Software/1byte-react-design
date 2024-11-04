import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxStyles } from './styles';
import { ICheckboxProps } from './types';

export const Checkbox = ({
    label: labelFieldProps,

    ...antdProps
}: ICheckboxProps) => {
    return (
        <ConfigProviderDesign>
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <CheckboxStyles {...antdProps} />
            </ConditionalWrapper>
        </ConfigProviderDesign>
    );
};

Checkbox.Group = CheckboxGroup;
