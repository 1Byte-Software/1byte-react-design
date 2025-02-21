import { forwardRef } from 'react';
import { RadioButton } from './RadioButton';
import { RadioGroup } from './RadioGroup';
import { RadioStyles } from './styles';
import { RdRadioComponent, RdRadioCompoundedComponent } from './types';

export const RadioInternal: RdRadioComponent = forwardRef((props, ref) => {
    return <RadioStyles ref={ref} {...props} />;
});

export const Radio = RadioInternal as RdRadioCompoundedComponent;
Radio.Button = RadioButton;
Radio.Group = RadioGroup;
