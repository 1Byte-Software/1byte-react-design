import { theme } from 'antd';
import { AliasToken } from 'antd/es/theme/internal';

export interface IConfig {
    designToken: AliasToken;
}

export const config: IConfig = {
    designToken: theme.getDesignToken(theme.defaultConfig),
};

export * from './designs';
export * from './atomics';
export * from './molecules';
// export * from './organisms';
export * from './models';
