import { theme } from "antd";
import { RdThemeConfig } from "./organisms";

export interface IConfig {
    designToken: NonNullable<RdThemeConfig['token']>;
    componentToken: RdThemeConfig['components'];
}

export var config: IConfig = {
    designToken: theme.getDesignToken(theme.defaultConfig),
    componentToken: {},
};