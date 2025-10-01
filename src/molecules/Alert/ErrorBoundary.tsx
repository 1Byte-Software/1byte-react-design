import React from 'react';
import { AlertErrorBoundaryStyled } from './styles';
import {
    RdAlertErrorBoundaryComponent,
    RdAlertErrorBoundaryProps,
    RdAlertErrorBoundaryStates,
} from './types';

export class AlertErrorBoundary
    extends React.Component<RdAlertErrorBoundaryProps, RdAlertErrorBoundaryStates>
    implements RdAlertErrorBoundaryComponent
{
    state: RdAlertErrorBoundaryStates = {
        error: undefined,
        info: {
            componentStack: '',
        },
    };

    componentDidCatch(error: Error | null, info: object): void {
        // update state with error + stack trace from Antd
        this.setState({
            error,
            info: {
                componentStack: (info as any).componentStack ?? '',
            },
        });
    }

    render() {
        return <AlertErrorBoundaryStyled {...this.props} />;
    }
}
