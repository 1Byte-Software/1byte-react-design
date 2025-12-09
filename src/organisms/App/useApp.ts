import { App as AppAntd, notification as antdNotification } from 'antd';
import { useMemo } from 'react';
import { __rdNotificationStaticFunc } from '../../molecules';
import { RdNotificationInstance, RdUseAppProps } from './types';

export const rdUseApp = (): RdUseAppProps => {
    const { message, modal, notification: notificationWithContext } = AppAntd.useApp();

    const notificationCustom: RdNotificationInstance = useMemo(() => {
        return {
            open: props => __rdNotificationStaticFunc(props, notificationWithContext),
            destroy: antdNotification.destroy,
            error: props =>
                __rdNotificationStaticFunc(
                    {
                        ...props,
                        type: 'error',
                    },
                    notificationWithContext
                ),
            info: props =>
                __rdNotificationStaticFunc(
                    {
                        ...props,
                        type: 'info',
                    },
                    notificationWithContext
                ),
            success: props =>
                __rdNotificationStaticFunc(
                    {
                        ...props,
                        type: 'success',
                    },
                    notificationWithContext
                ),
            warning: props =>
                __rdNotificationStaticFunc(
                    {
                        ...props,
                        type: 'warning',
                    },
                    notificationWithContext
                ),
        };
    }, [message]);

    return {
        message,
        modal,
        notification: notificationCustom,
    };
};
