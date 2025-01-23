import { notification as antdNotification } from 'antd';
import { RdNotificationProps } from './types';

let notification: RdNotificationProps = {} as RdNotificationProps;

notification.config = antdNotification.config;
notification.destroy = antdNotification.destroy;
notification.error = antdNotification.error;
notification.info = antdNotification.info;
notification.open = antdNotification.open;
notification.success = antdNotification.success;
notification.useNotification = antdNotification.useNotification;
notification.warning = antdNotification.warning;
notification._InternalPanelDoNotUseOrYouWillBeFired =
    antdNotification._InternalPanelDoNotUseOrYouWillBeFired;

export { notification };
