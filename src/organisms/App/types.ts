import { App, GetProps } from 'antd';
import { ComponentToken as AppComponentTokenAntd } from 'antd/es/app/style';
import { NotificationInstance } from 'antd/es/notification/interface';
import { RdNotificationConfig, RdNotificationStaticFn } from '../../molecules';
import { AppInternal } from './App';
import { rdUseApp } from './useApp';

//#region Define Ant Design types
type AppPropsAntd = GetProps<typeof App>;
type useAppPropsAntd = ReturnType<(typeof App)['useApp']>;
type NotificationInstanceAntd = NotificationInstance;

//#endregion

//#region Define extended component tokens
type AppComponentTokenExtend = {};
//#endregion

//#region Define extended types
type NotificationInstanceExtend = {
    success: RdNotificationStaticFn;
    error: RdNotificationStaticFn;
    info: RdNotificationStaticFn;
    warning: RdNotificationStaticFn;
    open: RdNotificationStaticFn;
};
type AppPropsExtend = {
    notification?: RdNotificationConfig;
};
type useAppPropsExtend = {
    notification: RdNotificationInstance;
};
//#endregion

//#region Export types
export type RdAppProps = Omit<AppPropsAntd, 'notification'> & AppPropsExtend;
export type RdUseAppProps = useAppPropsAntd & useAppPropsExtend;
export type RdAppComponentToken = AppComponentTokenAntd & AppComponentTokenExtend;
export type RdNotificationInstance = Omit<
    NotificationInstanceAntd,
    'success' | 'error' | 'info' | 'warning' | 'open'
> &
    NotificationInstanceExtend;
//#endregion

export type RdAppCompoundedComponent = typeof AppInternal & {
    useApp: typeof rdUseApp;
};

const a: RdAppProps = {
    notification: {},
};
