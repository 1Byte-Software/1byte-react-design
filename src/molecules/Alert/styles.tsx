import styled from '@emotion/styled';
import { Alert } from 'antd';
import { RdAlertErrorBoundaryComponent } from './types';

export const AlertStyled = styled(Alert)``;

export const AlertErrorBoundaryStyled = styled(
    Alert.ErrorBoundary as typeof RdAlertErrorBoundaryComponent
)``;
