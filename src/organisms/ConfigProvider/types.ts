import { ConfigProvider as ConfigProviderAntd, GetProps, ThemeConfig } from 'antd';
import { AliasToken } from 'antd/es/theme/internal';
import { ConfigProviderInternal } from './ConfigProvider';

//#region Define Ant Design types
type ConfigProviderProps = GetProps<typeof ConfigProviderAntd>;
type ComponentsConfig = NonNullable<ThemeConfig['components']>;
type Algorithm = ThemeConfig['algorithm'];
//#endregion

//#region Define extended types
type ConfigProviderPropsExtend = {};
type AliasTokenExtend = {};
type ComponentsConfigExtend = {};
type AlgorithmExtend = {};
type ThemeConfigExtend = {};
//#endregion

//#region Export types
export type RdConfigProviderProps = ConfigProviderProps & ConfigProviderPropsExtend;
export type RdAliasToken = AliasToken & AliasTokenExtend;
export type RdComponentsConfigExtend = ComponentsConfig & ComponentsConfigExtend;
export type RdAlgorithm = Algorithm & AlgorithmExtend;
export type RdThemeConfig = ThemeConfig & ThemeConfigExtend;

export type RdConfigProviderCompoundedComponent = typeof ConfigProviderInternal & {
    ConfigContext: (typeof ConfigProviderAntd)['ConfigContext'];
    SizeContext: (typeof ConfigProviderAntd)['SizeContext'];
    config: (typeof ConfigProviderAntd)['config'];
    useConfig: (typeof ConfigProviderAntd)['useConfig'];
};
//#endregion
