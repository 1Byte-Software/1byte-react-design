import { theme, ThemeConfig } from 'antd';

export interface IConfig {
    designToken: NonNullable<ThemeConfig['token']>;
    componentToken: ThemeConfig['components'];
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
