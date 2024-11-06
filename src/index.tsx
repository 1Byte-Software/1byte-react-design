import { theme } from 'antd';
import { IRdNotificationConfig, IRdThemeConfig } from './organisms';

export interface IConfig {
    designToken: NonNullable<IRdThemeConfig['token']>;
    componentToken: IRdThemeConfig['components'];

    notification?: IRdNotificationConfig;
}

export const config: IConfig = {
    designToken: theme.getDesignToken(theme.defaultConfig),
    componentToken: {},
};

export * from './atomics';
export * from './models';
export * from './molecules';
export * from './organisms';

export const version = '0.0.6';
