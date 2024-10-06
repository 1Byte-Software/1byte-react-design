import { ConfigProvider } from 'antd';
import { config } from '.';
import { PropsWithChildren } from 'react';

export const ConfigProviderDesign = ({ children }: PropsWithChildren) => {
    return (
        <ConfigProvider
            theme={{
                token: config.designToken,
                components: config.componentToken,
            }}
        >
            {children}
        </ConfigProvider>
    );
};
