import { OverrideTokenMap } from '@ant-design/cssinjs-utils';
import { ConfigProvider as ConfigProviderAntd, MappingAlgorithm, ThemeConfig } from 'antd';
import { AliasToken } from 'antd/es/theme/internal';
import { RdMoleculesTokenMap } from '../../molecules/types';
import { RdTemplatesTokenMap } from '../../templates/types';
import { ConfigProviderInternal } from './ConfigProvider';
import { RdConfigContext } from './context/types';
import { RdConfigProviderProps } from './types.props';
import { RdOrganismsTokenMap } from '../types';

//#region Define Ant Design types
type Algorithm = ThemeConfig['algorithm'];
//#endregion

//#region Define extended types
type AliasTokenExtend = {};
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
export type RdComponentTokenMap = RdMoleculesTokenMap & RdOrganismsTokenMap & RdTemplatesTokenMap;
export type RdAliasToken = AliasToken & AliasTokenExtend;
export type RdComponentsConfigExtend = RdComponentsConfig & ComponentsConfigExtend;
export type RdAlgorithm = Algorithm & AlgorithmExtend;
export type RdThemeConfig = Omit<ThemeConfig, 'token'> & ThemeConfigExtend;
export type RdOverrideToken = OverrideTokenMap<RdComponentTokenMap, RdAliasToken>;
export type RdComponentsConfig = {
    [key in keyof RdOverrideToken]?: RdOverrideToken[key] & {
        algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
    };
};

export type RdConfigProviderCompoundedComponent = typeof ConfigProviderInternal & {
    ConfigContext: RdConfigContext;
    SizeContext: (typeof ConfigProviderAntd)['SizeContext'];
    config: (typeof ConfigProviderAntd)['config'];
    useConfig: (typeof ConfigProviderAntd)['useConfig'];
};
//#endregion

//#region Define component types
export type RdConfigProviderInternalComponent = React.FC<RdConfigProviderProps>;
//#endregion
