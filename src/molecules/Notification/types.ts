import { GetProps, notification } from 'antd';
import { ArgsProps, GlobalConfigProps, IconType } from 'antd/es/notification/interface';
import PurePanel from 'antd/es/notification/PurePanel';
import { ComponentToken as NotificationComponentTokenAntd } from 'antd/es/notification/style';
import useNotification from 'antd/es/notification/useNotification';

//#region Define Ant Design types
type NotificationPropsAntd = Omit<GetProps<typeof notification>, 'config'>;

type NotificationGlobalConfigAntd = GlobalConfigProps;

type NotificationArgsPropsAntd = Omit<ArgsProps, 'message'>;
//#endregion

//#region Define extended component tokens
type NotificationComponentTokenExtend = {};
//#endregion

//#region Define extended types
type RdNoticeMethods = {
    success: RdNotificationStaticFn;
    info: RdNotificationStaticFn;
    warning: RdNotificationStaticFn;
    error: RdNotificationStaticFn;
};

type NoticeDefaultMessage = {
    success?: string;
    info?: string;
    warning?: string;
    error?: string;
};

type RdBaseMethods = {
    globalConfigExtend: NotificationGlobalConfigExtend;
    open: (config: RdNotificationArgsProps) => void;
    destroy: (key?: React.Key) => void;
    config: (config: RdNotificationGlobalConfig) => void;
    useNotification: typeof useNotification;
    /** @private Internal Component. Do not use in your production. */
    _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};

type RdNotificationPropsExtend = RdBaseMethods & RdNoticeMethods;
type NotificationGlobalConfigExtend = {
    defaultMessage?: string | NoticeDefaultMessage;
};

type NotificationArgsPropsExtend = {
    message?: React.ReactNode;
};

export type RdNotificationStaticFn = (config: RdNotificationArgsProps, type?: IconType) => void;
//#endregion

//#region Export types
export type RdNotificationProps = RdNotificationPropsExtend;
export type RdNotificationGlobalConfig = NotificationGlobalConfigAntd &
    NotificationGlobalConfigExtend;

export type RdNotificationArgsProps = NotificationArgsPropsAntd & NotificationArgsPropsExtend;

export type RdNotificationComponentToken = NotificationComponentTokenAntd &
    NotificationComponentTokenExtend;
//#endregion
