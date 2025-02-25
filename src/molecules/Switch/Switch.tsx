import { forwardRef } from 'react';
import { SwitchStyled } from './styles';
import { RdSwitchComponent, RdSwitchCompoundedComponent } from './types';

export const SwitchInternal: RdSwitchComponent = forwardRef((props, ref) => {
    return <SwitchStyled ref={ref} {...props} />;
});

export const Switch = SwitchInternal as RdSwitchCompoundedComponent;