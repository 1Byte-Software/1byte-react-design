import { forwardRef } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxStyles } from './styles';
import { RdCheckboxCompoundedComponent, RdInternalCheckboxComponent } from './types';

export const CheckboxInternal: RdInternalCheckboxComponent = forwardRef((props, ref) => {
    return <CheckboxStyles ref={ref} {...props} />;
});

export const Checkbox = CheckboxInternal as RdCheckboxCompoundedComponent;

Checkbox.Group = CheckboxGroup;
