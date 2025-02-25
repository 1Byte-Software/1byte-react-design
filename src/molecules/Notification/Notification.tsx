import { notification as antdNotification, NotificationArgsProps } from 'antd';
import { RdNotificationGlobalConfig, RdNotificationProps, RdNotificationStaticFn } from './types';

let notification: RdNotificationProps = {} as RdNotificationProps;

const rdNotificationStaticFunc: RdNotificationStaticFn = (rdNotificationArgsProps, type) => {
    let message = rdNotificationArgsProps.message;
    if (notification.globalConfigExtend.defaultMessage) {
        typeof notification.globalConfigExtend.defaultMessage === 'string' &&
            (message = notification.globalConfigExtend.defaultMessage);

        if (typeof notification.globalConfigExtend.defaultMessage === 'object') {
            const { success, info, warning, error } =
                notification.globalConfigExtend.defaultMessage;
            switch (type) {
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

    antdNotification.open({
        ...notificationArgsProps,
        type,
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
    rdNotificationStaticFunc(config);
};
notification.error = config => {
    rdNotificationStaticFunc(config, 'error');
};
notification.info = config => {
    rdNotificationStaticFunc(config, 'info');
};
notification.success = config => {
    rdNotificationStaticFunc(config, 'success');
};
notification.warning = config => {
    rdNotificationStaticFunc(config, 'warning');
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
