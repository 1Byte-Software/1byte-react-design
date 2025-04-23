import { theme } from 'antd';
import { RdThemeConfig } from './organisms';

export interface IConfig {
    designToken: NonNullable<RdThemeConfig['token']>;
    componentToken: RdThemeConfig['components'];
}

export const config: IConfig = {
    designToken: theme.getDesignToken(theme.defaultConfig),
    componentToken: {},
};

export * from './atomics';
export * from './molecules';
export * from './organisms';
export * from './templates';
export * from './utils';

export * from './types'