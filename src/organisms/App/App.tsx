import { Global } from '@emotion/react';
import { App as AppAntd, AppProps } from 'antd';
import { ArgsProps } from 'antd/es/notification';
import { config } from '../..';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import {
    MESSAGE_ERROR_DEFAULT,
    MESSAGE_INFO_DEFAULT,
    MESSAGE_OPEN_DEFAULT,
    MESSAGE_SUCCESS_DEFAULT,
    MESSAGE_WARNING_DEFAULT,
} from './constants';
import NotificationStyles from './NotificationStyles';

interface IAppProps extends AppProps {}

const App = (props: IAppProps) => {
    const { children, ...rest } = props;
    return (
        <ConfigProviderDesign>
            <Global
                styles={{
                    ...NotificationStyles,
                }}
            />
            <AppAntd
                // Default notification props
                notification={{
                    prefixCls: 'rd-notification',
                }}
                {...(rest as AppProps)}
            >
                {children}
            </AppAntd>
        </ConfigProviderDesign>
    );
};

App.useApp = AppAntd.useApp;

export const useNotification = () => {
    const { notification } = App.useApp();

    /**
     * @desc Custom success notification.
     */
    const success = (
        description: ArgsProps['description'],
        args?: Omit<Partial<ArgsProps>, 'description'>
    ) => {
        const message: ArgsProps['message'] =
            config?.notification?.success?.message || MESSAGE_SUCCESS_DEFAULT;

        notification.success({ ...config?.notification?.success, ...args, message, description });
    };

    /**
     * @desc Custom error notification.
     */
    const error = (
        description: ArgsProps['description'],
        args?: Omit<Partial<ArgsProps>, 'description'>
    ) => {
        const message: ArgsProps['message'] =
            config?.notification?.error?.message || MESSAGE_ERROR_DEFAULT;

        notification.error({ ...config?.notification?.error, ...args, message, description });
    };

    /**
     * @desc Custom warning notification.
     */
    const warning = (
        description: ArgsProps['description'],
        args?: Omit<Partial<ArgsProps>, 'description'>
    ) => {
        const message: ArgsProps['message'] =
            config?.notification?.warning?.message || MESSAGE_WARNING_DEFAULT;

        notification.warning({ ...config?.notification?.warning, ...args, message, description });
    };

    /**
     * @desc Custom info notification.
     */
    const info = (
        description: ArgsProps['description'],
        args?: Omit<Partial<ArgsProps>, 'description'>
    ) => {
        const message: ArgsProps['message'] =
            config?.notification?.info?.message || MESSAGE_INFO_DEFAULT;

        notification.info({ ...config?.notification?.info, ...args, message, description });
    };

    /**
     * @desc Custom open notification.
     */
    const open = (
        description: ArgsProps['description'],
        args?: Omit<Partial<ArgsProps>, 'description'>
    ) => {
        const message: ArgsProps['message'] =
            config?.notification?.error?.message || MESSAGE_OPEN_DEFAULT;

        notification.open({ ...config?.notification?.open, ...args, message, description });
    };

    return { ...notification, success, error, warning, info, open };
};

export const useMessage = () => {
    const { message } = App.useApp();
    return message;
};

export const useModal = () => {
    const { modal } = App.useApp();
    return modal;
};

export default App;
