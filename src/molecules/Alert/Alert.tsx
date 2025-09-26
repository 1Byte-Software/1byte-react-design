import { forwardRef } from 'react';
import { AlertStyled } from './styles';
import { RdAlertComponent, RdAlertCompoundedComponent } from './types';

export const InternalAlert: RdAlertComponent = forwardRef((props, ref) => {
    return <AlertStyled {...props} ref={ref} />;
});

export const Alert: RdAlertCompoundedComponent = InternalAlert as RdAlertCompoundedComponent;
