import { ConfigProvider as ConfigProviderAntd } from 'antd';
import { ConfigContext } from './context';
import { RdConfigConsumerProps } from './context/types';
import { RdConfigProviderCompoundedComponent, RdConfigProviderInternalComponent } from './types';

export const ConfigProviderInternal: RdConfigProviderInternalComponent = props => {
    return (
        <ConfigContext.Provider
            value={{
                ...(props as RdConfigConsumerProps),
            }}
        >
            <ConfigProviderAntd {...props} />
        </ConfigContext.Provider>
    );
};

export const ConfigProvider = ConfigProviderInternal as RdConfigProviderCompoundedComponent;

ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = ConfigProviderAntd.SizeContext;
ConfigProvider.config = ConfigProviderAntd.config;
ConfigProvider.useConfig = ConfigProviderAntd.useConfig;
