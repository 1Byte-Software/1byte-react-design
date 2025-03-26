import { OverrideTokenMap } from '@ant-design/cssinjs-utils';
import {
    ConfigProvider as ConfigProviderAntd,
    GetProps,
    MappingAlgorithm,
    ThemeConfig,
} from 'antd';
import { AliasToken } from 'antd/es/theme/internal';
import { RdMoleculesTokenMap } from '../../molecules/types';
import { ConfigProviderInternal } from './ConfigProvider';
import { RdTemplatesTokenMap } from '../../templates/types';

//#region Define Ant Design types
type ConfigProviderProps = GetProps<typeof ConfigProviderAntd>;
type Algorithm = ThemeConfig['algorithm'];
//#endregion

//#region Define extended types
type ConfigProviderPropsExtend = {};
type AliasTokenExtend = {
    /**
     * Brand secondary color is one of the most direct visual elements to reflect the characteristics and communication of the product. After you have selected the brand color, we will automatically generate a complete color palette and assign it effective design semantics.
     */
    colorSecondary: string;

    /**
     * Brand tertiary color is one of the most direct visual elements to reflect the characteristics and communication of the product. After you have selected the brand color, we will automatically generate a complete color palette and assign it effective design semantics.
     */
    colorTertiary: string;

    /**
     * Brand quaternary color is one of the most direct visual elements to reflect the characteristics and communication of the product. After you have selected the brand color, we will automatically generate a complete color palette and assign it effective design semantics.
     */
    colorQuaternary: string;
};
type ComponentsConfigExtend = {};
type AlgorithmExtend = {};
type ThemeConfigExtend = {
    /**
     * @desc Modify Design Token.
     * @override Partial<AliasToken> (antd)
     */
    token?: Partial<RdAliasToken>;

    /**
     * @desc Modify Component Token and Alias Token applied to components.
     * @override ComponentsConfig (antd)
     */
    components?: RdComponentsConfig;
};
//#endregion

//#region Export types
export type RdComponentTokenMap = RdMoleculesTokenMap & RdTemplatesTokenMap;
export type RdConfigProviderProps = ConfigProviderProps & ConfigProviderPropsExtend;
export type RdAliasToken = AliasToken & AliasTokenExtend;
export type RdComponentsConfigExtend = RdComponentsConfig & ComponentsConfigExtend;
export type RdAlgorithm = Algorithm & AlgorithmExtend;
export type RdThemeConfig = ThemeConfig & ThemeConfigExtend;
export type RdOverrideToken = OverrideTokenMap<RdComponentTokenMap, RdAliasToken>;
export type RdComponentsConfig = {
    [key in keyof RdOverrideToken]?: RdOverrideToken[key] & {
        algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
    };
};

export type RdConfigProviderCompoundedComponent = typeof ConfigProviderInternal & {
    ConfigContext: (typeof ConfigProviderAntd)['ConfigContext'];
    SizeContext: (typeof ConfigProviderAntd)['SizeContext'];
    config: (typeof ConfigProviderAntd)['config'];
    useConfig: (typeof ConfigProviderAntd)['useConfig'];
};
//#endregion
