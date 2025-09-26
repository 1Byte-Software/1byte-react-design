import { Alert, GetProps } from 'antd';
import { AlertRef } from 'antd/es/alert/Alert';
import { ComponentToken as AlertComponentTokenAntd } from 'antd/es/drawer/style';
import { ComponentProps } from 'react';

type AlertPropsAntd = GetProps<typeof Alert>;
type AlertErrorBoundaryPropsAntd = GetProps<typeof Alert.ErrorBoundary>;

type AlertRefAntd = AlertRef;

//#endregion

//#region Define extended component tokens
type AlertComponentTokenExtend = {};
//#endregion

//#region Define extended types
type AlertPropsExtend = {};
type AlertErrorBoundaryPropsExtend = {};

type AlertRefExtend = {};
//#endregion

//#region Export types
export type RdAlertProps = AlertPropsAntd & AlertPropsExtend;
export type RdAlertErrorBoundaryProps = AlertErrorBoundaryPropsAntd & AlertErrorBoundaryPropsExtend;
export type RdAlertRef = AlertRefAntd & AlertRefExtend;
export type RdAlertComponentToken = AlertComponentTokenAntd & AlertComponentTokenExtend;
//#endregion

//#region Define component types
// export type RdAlertComponent = React.FC<RdAlertProps>;
export type RdAlertComponent = React.ForwardRefExoticComponent<
    RdAlertProps & React.RefAttributes<RdAlertRef>
>;

export type RdAlertCompoundedComponent = RdAlertComponent & {
    // Timer: RdAlertErrorBoundaryComponent;
};
//#endregion
