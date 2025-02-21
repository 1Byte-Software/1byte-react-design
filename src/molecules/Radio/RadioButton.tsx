import { forwardRef } from 'react';
import { RadioButtonStyles } from './styles';
import { RdRadioButtonComponent } from './types';

export const RadioButton: RdRadioButtonComponent = forwardRef((props, ref) => {
    return <RadioButtonStyles ref={ref} {...props} />;
});
