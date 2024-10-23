import { ThemeConfig } from 'antd';
export interface IConfig {
    designToken: NonNullable<ThemeConfig['token']>;
    componentToken: ThemeConfig['components'];
}
export declare const config: IConfig;
export * from './atomics';
export * from './models';
export * from './molecules';
export * from './organisms';
export declare const version = "0.0.6";
