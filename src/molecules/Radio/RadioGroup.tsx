import { RadioGroupProps } from 'antd';
import { forwardRef } from 'react';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { RadioGroupStyles } from './styles';
import { RdRadioGroupProps } from './types';

export const RadioGroup = forwardRef((props: RdRadioGroupProps, ref: RdRadioGroupProps['ref']) => {
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
                <RadioGroupStyles ref={ref} axis={axis} {...(antdProps as RadioGroupProps)} />
            </ConditionalWrapper>
        </ConfigProviderDesign>
    );
});
