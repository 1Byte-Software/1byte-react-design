import { notification as antdNotification, NotificationArgsProps } from 'antd';
import { RdNotificationGlobalConfig, RdNotificationProps, RdNotificationStaticFn } from './types';

let notification: RdNotificationProps = {} as RdNotificationProps;

/**
 * This is Internal Function. Do not use in your production.
 */
export const __rdNotificationStaticFunc: RdNotificationStaticFn = (
    rdNotificationArgsProps,
    notificationInstance
) => {
    let message = rdNotificationArgsProps.message;

    if (notification.globalConfigExtend.defaultMessage) {
        typeof notification.globalConfigExtend.defaultMessage === 'string' &&
            (message = notification.globalConfigExtend.defaultMessage);

        if (typeof notification.globalConfigExtend.defaultMessage === 'object') {
            const { success, info, warning, error } =
                notification.globalConfigExtend.defaultMessage;
            switch (rdNotificationArgsProps.type) {
                case 'success':
                    message = success || message;
                    break;
                case 'info':
                    message = info || message;
                    break;
                case 'warning':
                    message = warning || message;
                    break;
                case 'error':
                    message = error || message;
                    break;
                default:
                    break;
            }
        }
    }
    const notificationArgsProps: NotificationArgsProps = {
        message,
        ...rdNotificationArgsProps,
    };

    const currentNotification = notificationInstance ?? antdNotification;

    currentNotification.open({
        ...notificationArgsProps,
        type: rdNotificationArgsProps.type,
    });
};

notification.config = (rdNotificationGlobalConfig: RdNotificationGlobalConfig) => {
    const { defaultMessage, ...notificationGlobalConfigAntd } = rdNotificationGlobalConfig;

    notification.globalConfigExtend = {
        defaultMessage,
    };

    antdNotification.config(notificationGlobalConfigAntd);
};
notification.destroy = config => {
    antdNotification.destroy(config);
};
notification.open = config => {
    __rdNotificationStaticFunc(config);
};
notification.error = config => {
    __rdNotificationStaticFunc({
        ...config,
        type: 'error',
    });
};
notification.info = config => {
    __rdNotificationStaticFunc({
        ...config,
        type: 'info',
    });
};
notification.success = config => {
    __rdNotificationStaticFunc({
        ...config,
        type: 'success',
    });
};
notification.warning = config => {
    __rdNotificationStaticFunc({
        ...config,
        type: 'warning',
    });
};
notification.useNotification = antdNotification.useNotification;
notification._InternalPanelDoNotUseOrYouWillBeFired =
    antdNotification._InternalPanelDoNotUseOrYouWillBeFired;

/**
 * =======================================================================================================
 * ================================================EXTENDED===============================================
 * =======================================================================================================
 */
notification.globalConfigExtend = {};

export { notification };
