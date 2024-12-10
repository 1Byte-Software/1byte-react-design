import { forwardRef } from 'react';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { CheckboxGroupStyles } from './styles';
import { RdCheckboxGroupProps } from './types';

export const CheckboxGroup = forwardRef(
    (props: RdCheckboxGroupProps, ref: RdCheckboxGroupProps['ref']) => {
        const {
            label: labelFieldProps,
            axis = 'horizontal',

            ...antdProps
        } = props;

        return (
            <ConfigProviderDesign>
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <CheckboxGroupStyles ref={ref} {...antdProps} axis={axis} />
                </ConditionalWrapper>
            </ConfigProviderDesign>
        );
    }
);
