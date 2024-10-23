import { ThemeConfig } from 'antd';
import { PropsWithChildren } from 'react';
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
export declare const ConfigProviderDesign: ({ children, componentToken, designToken, }: IConfigProviderDesignProps) => import("react/jsx-runtime").JSX.Element;
export {};
