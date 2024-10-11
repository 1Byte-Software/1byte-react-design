import { ConfigProvider } from 'antd';
import { PropsWithChildren } from 'react';
import { config } from '.';

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
