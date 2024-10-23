import { ConfigProvider, ThemeConfig } from 'antd';
import { PropsWithChildren } from 'react';
import { config } from '.';

interface IConfigProviderDesignProps extends PropsWithChildren {
    /**
     * The theme components configuration.
     * This will override the default `config.componentToken` if provided.
     */
    componentToken?: ThemeConfig['components'];

    /**
     * The theme design token configuration.
     * This will override the default `config.designToken` if provided.
     */
    designToken?: ThemeConfig['token'];
}

export const ConfigProviderDesign = ({
    children,
    componentToken,
    designToken,
}: IConfigProviderDesignProps) => {
    const componentTokenCombined = {
        ...config.componentToken,
        ...componentToken,
    };

    const designTokenCombined = {
        ...config.designToken,
        ...designToken,
    };

    return (
        <ConfigProvider
            theme={{
                token: designTokenCombined,
                components: componentTokenCombined,
            }}
        >
            {children}
        </ConfigProvider>
    );
};
