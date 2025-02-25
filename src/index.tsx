import { theme } from 'antd';
import { IRdThemeConfig } from './utils/types';

export interface IConfig {
    designToken: NonNullable<IRdThemeConfig['token']>;
    componentToken: IRdThemeConfig['components'];
}

export const config: IConfig = {
    designToken: theme.getDesignToken(theme.defaultConfig),
    componentToken: {},
};

export * from './atomics';
export * from './molecules';
export * from './organisms';
export * from './utils';