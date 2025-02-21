import { forwardRef } from 'react';
import { RadioGroupStyles } from './styles';
import { RdRadioGroupComponent } from './types';

export const RadioGroup: RdRadioGroupComponent = forwardRef((props, ref) => {
    return <RadioGroupStyles ref={ref} {...props} />;
});
