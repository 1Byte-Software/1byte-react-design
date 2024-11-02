import { RadioGroupProps } from 'antd';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { RadioGroupStyles } from './styles';
import { IRadioGroupProps } from './types';

export const RadioGroup = ({
    label: labelFieldProps,
    axis = 'horizontal',

    ...antdProps
}: IRadioGroupProps) => {
    return (
        <ConfigProviderDesign>
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <RadioGroupStyles axis={axis} {...(antdProps as RadioGroupProps)} />
            </ConditionalWrapper>
        </ConfigProviderDesign>
    );
};
