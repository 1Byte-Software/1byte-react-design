import { forwardRef } from 'react';
import { AlertStyled } from './styles';
import { RdAlertComponent, RdAlertCompoundedComponent } from './types';
import { AlertErrorBoundary } from './ErrorBoundary';

export const InternalAlert: RdAlertComponent = forwardRef((props, ref) => {
    return <AlertStyled {...props} ref={ref} />;
});

export const Alert: RdAlertCompoundedComponent = InternalAlert as RdAlertCompoundedComponent;

Alert.ErrorBoundary = AlertErrorBoundary;
