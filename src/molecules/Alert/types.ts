import { Alert, GetProps } from 'antd';
import { AlertRef } from 'antd/es/alert/Alert';
import { ComponentToken as AlertComponentTokenAntd } from 'antd/es/drawer/style';
import React, { ComponentProps } from 'react';

type AlertPropsAntd = GetProps<typeof Alert>;

/**
 * 📝 Explanation:
 *
 * For most Ant Design components, we can simply get the props type using:
 *    type XxxPropsAntd = GetProps<typeof Xxx>;
 *
 * However, `Alert.ErrorBoundary` is a special case:
 * - Ant Design does NOT export a public props interface for ErrorBoundary.
 * - If we directly use `GetProps<typeof Alert.ErrorBoundary>`,
 *   TypeScript will try to expose internal types and throw an error:
 *     ts(4023): "Exported variable '...' has or is using name '...' but cannot be named".
 *
 * 🚑 Workaround:
 * - Use `ComponentProps<typeof Alert.ErrorBoundary>` to get the props,
 *   then clone it via a mapped type to produce a "public" type.
 * - This way we avoid referencing Ant Design’s internal types.
 *
 * 🔮 Note:
 * - If Ant Design exports a proper `AlertErrorBoundaryProps` type in the future,
 *   we can safely remove this workaround and write:
 *     type AlertErrorBoundaryPropsAntd = GetProps<typeof Alert.ErrorBoundary>;
 */
type AlertErrorBoundaryPropsAntd = {
    [K in keyof ComponentProps<typeof Alert.ErrorBoundary>]: ComponentProps<
        typeof Alert.ErrorBoundary
    >[K];
};

/**
 * 📝 Explanation:
 *
 * Ant Design also does not export the `ErrorBoundaryStates` type.
 * Therefore, instead of extracting it automatically, we need to define this interface manually.
 *
 * The state shape is referenced from the source code:
 *    state: {
 *        error: undefined;
 *        info: {
 *            componentStack: string;
 *        };
 *    }
 *
 * This is simply a copied definition to ensure type safety for our extended components.
 * If Ant Design exports `ErrorBoundaryStates` in the future, we should switch to that instead.
 */
interface AlertErrorBoundaryStatesAntd {
    error?: Error | null;
    info?: {
        componentStack?: string;
    };
}
type AlertRefAntd = AlertRef;

//#endregion

//#region Define extended component tokens
type AlertComponentTokenExtend = {};
//#endregion

//#region Define extended types
type AlertPropsExtend = {};
type AlertErrorBoundaryPropsExtend = {};
type AlertErrorBoundaryStatesExtend = {};

type AlertRefExtend = {};
//#endregion

//#region Export types
export type RdAlertProps = AlertPropsAntd & AlertPropsExtend;
export type RdAlertErrorBoundaryProps = AlertErrorBoundaryPropsAntd & AlertErrorBoundaryPropsExtend;
export type RdAlertErrorBoundaryStates = AlertErrorBoundaryStatesAntd &
    AlertErrorBoundaryStatesExtend;
export type RdAlertRef = AlertRefAntd & AlertRefExtend;
export type RdAlertComponentToken = AlertComponentTokenAntd & AlertComponentTokenExtend;
//#endregion

//#region Define component types
export type RdAlertComponent = React.ForwardRefExoticComponent<
    RdAlertProps & React.RefAttributes<RdAlertRef>
>;
export declare class RdAlertErrorBoundaryComponent extends React.Component<
    RdAlertErrorBoundaryProps,
    RdAlertErrorBoundaryStates
> {
    state: RdAlertErrorBoundaryStates;
    componentDidCatch(error: Error | null, info: object): void;
    render(): React.ReactNode;
}

export type RdAlertCompoundedComponent = RdAlertComponent & {
    ErrorBoundary: typeof RdAlertErrorBoundaryComponent;
};
//#endregion
