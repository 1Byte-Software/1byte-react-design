import { GetProps, notification } from 'antd';
import { ComponentToken as NotificationComponentTokenAntd } from 'antd/es/notification/style';

//#region Define Ant Design types
type NotificationProps = GetProps<typeof notification>;
//#endregion

//#region Define extended component tokens
type NotificationComponentTokenExtend = {};
//#endregion

//#region Define extended types
type NotificationPropsExtend = {};
//#endregion

//#region Export types
export type RdNotificationProps = NotificationProps & NotificationPropsExtend;
export type RdNotificationComponentToken = NotificationComponentTokenAntd &
    NotificationComponentTokenExtend;
//#endregion
