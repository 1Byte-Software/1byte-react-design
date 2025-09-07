import { theme } from 'antd';
import { RdThemeConfig } from './organisms';

export interface IConfig {
    designToken: NonNullable<RdThemeConfig['token']>;
    componentToken: RdThemeConfig['components'];
}

const defaultDesignToken = theme.getDesignToken(theme.defaultConfig);

export var config: IConfig = {
    designToken: defaultDesignToken,
    componentToken: {},
};

declare module 'antd' {
    interface DefaultOptionType {
        value?: string | number | boolean | null;
    }
}
