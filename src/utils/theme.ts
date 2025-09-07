import { theme } from 'antd';
import { RdAliasToken, RdThemeConfig } from '../organisms';

export const rdTheme = {
    ...theme,
    getDesignToken: (config: RdThemeConfig): RdAliasToken => {
        // getDesignToken in antd
        const antdDesignToken = theme.getDesignToken(config);

        const mergedDesignToken: RdAliasToken = {
            ...antdDesignToken,
        };

        return mergedDesignToken;
    },
};
