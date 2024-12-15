import { RadioGroupProps } from 'antd';
import { forwardRef } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { RadioGroupStyles } from './styles';
import { RdRadioGroupProps } from './types';

export const RadioGroup = forwardRef((props: RdRadioGroupProps, ref: RdRadioGroupProps['ref']) => {
    const { ...antdProps } = props;

    return (
        <ConfigProviderDesign>
            <RadioGroupStyles ref={ref} {...(antdProps as RadioGroupProps)} />
        </ConfigProviderDesign>
    );
});
