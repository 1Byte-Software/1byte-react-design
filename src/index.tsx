import { theme } from 'antd';
import { AliasToken } from 'antd/es/theme/internal';
import { RangePickerControl } from './molecules';

export interface IConfig {
    designToken: AliasToken;
}

export const config: IConfig = {
    designToken: theme.getDesignToken(theme.defaultConfig),
};

export * from './models';
export * from './atomics';
export * from './molecules';
// export * from './organisms';