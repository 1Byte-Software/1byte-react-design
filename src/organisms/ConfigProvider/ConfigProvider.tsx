import { ConfigProvider as ConfigProviderAntd } from 'antd';
import { RdConfigProviderCompoundedComponent, RdConfigProviderProps } from './types';

export const ConfigProviderInternal = ({ ...antdProps }: RdConfigProviderProps) => {
    return <ConfigProviderAntd {...antdProps} />;
};

export const ConfigProvider = ConfigProviderInternal as RdConfigProviderCompoundedComponent;

ConfigProvider.ConfigContext = ConfigProviderAntd.ConfigContext;
ConfigProvider.SizeContext = ConfigProviderAntd.SizeContext;
ConfigProvider.config = ConfigProviderAntd.config;
ConfigProvider.useConfig = ConfigProviderAntd.useConfig;
