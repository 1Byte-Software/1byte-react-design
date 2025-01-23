import { GetProps, message } from 'antd';
import { ComponentToken as MessageComponentTokenAntd } from 'antd/es/message/style';

//#region Define Ant Design types
type MessageProps = GetProps<typeof message>;
//#endregion

//#region Define extended component tokens
type MessageComponentTokenExtend = {};
//#endregion

//#region Define extended types
type MessagePropsExtend = {};
//#endregion

//#region Export types
export type RdMessageProps = MessageProps & MessagePropsExtend;
export type RdMessageComponentToken = MessageComponentTokenAntd &
    MessageComponentTokenExtend;
//#endregion
