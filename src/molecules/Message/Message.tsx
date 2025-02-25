import { message as antdMessage } from 'antd';
import { RdMessageProps } from './types';

let message: RdMessageProps = {} as RdMessageProps;

message.config = antdMessage.config;
message.destroy = antdMessage.destroy;
message.error = antdMessage.error;
message.info = antdMessage.info;
message.open = antdMessage.open;
message.success = antdMessage.success;
message.useMessage = antdMessage.useMessage;
message.warning = antdMessage.warning;
message.loading = antdMessage.loading;
message._InternalPanelDoNotUseOrYouWillBeFired = antdMessage._InternalPanelDoNotUseOrYouWillBeFired;

export { message };
