import { forwardRef } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxStyles } from './styles';
import { RdCheckboxCompoundedComponent, RdCheckboxInternalComponent } from './types';

export const CheckboxInternal: RdCheckboxInternalComponent = forwardRef((props, ref) => {
    const { ...antdProps } = props;

    return <CheckboxStyles ref={ref} {...antdProps} />;
});

export const Checkbox = CheckboxInternal as RdCheckboxCompoundedComponent;
Checkbox.Group = CheckboxGroup;
