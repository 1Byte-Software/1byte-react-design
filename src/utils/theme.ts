import { DerivativeFunc, Theme } from '@ant-design/cssinjs';
import { theme } from 'antd';
import { DesignTokenProviderProps } from 'antd/es/theme/context';
import { MapToken } from 'antd/es/theme/interface';
import { AliasToken, GlobalToken, SeedToken } from 'antd/es/theme/internal';
import { default as defaultAlgorithm } from 'antd/es/theme/themes/default';
import { Context } from 'react';
import { RdAliasToken, RdThemeConfig } from '..';

export type RdTheme = {
    /** Default seedToken */
    defaultSeed: SeedToken;
    useToken: () => {
        theme: Theme<SeedToken, AliasToken>;
        token: GlobalToken;
        hashId: string;
        cssVar: GlobalToken;
    };
    defaultAlgorithm: typeof defaultAlgorithm;
    darkAlgorithm: DerivativeFunc<SeedToken, MapToken>;
    compactAlgorithm: DerivativeFunc<SeedToken, MapToken>;
    getDesignToken: (config?: RdThemeConfig) => RdAliasToken;
    /**
     * @private Private variable
     * @warring 🔥 Do not use in production. 🔥
     */
    defaultConfig: {
        token: SeedToken;
        override: {
            override: SeedToken;
        };
        hashed: boolean;
    };
    /**
     * @private Private variable
     * @warring 🔥 Do not use in production. 🔥
     */
    _internalContext: Context<DesignTokenProviderProps>;
};

export const rdTheme: RdTheme = {
    ...theme,
    getDesignToken: (config?: RdThemeConfig): RdAliasToken => {
        // getDesignToken in antd
        const antdDesignToken = theme.getDesignToken(config);

        const mergedDesignToken: RdAliasToken = {
            ...antdDesignToken,
        };

        return mergedDesignToken as RdAliasToken;
    },
};
