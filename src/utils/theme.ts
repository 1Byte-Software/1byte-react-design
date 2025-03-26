import { theme } from 'antd';
import { darken, lighten } from 'polished';
import { RdAliasToken, RdThemeConfig } from '../organisms';
import {
    IQuaternaryColor,
    ISecondaryColor,
    ITertiaryColor,
} from '../organisms/ConfigProvider/types.colors';

/**
 * @description Generate color based on base color
 * @param color
 */
const generateColor = (baseColor: string) => {
    return {
        colorActive: darken(0.1, baseColor),
        colorBg: lighten(0.3, baseColor),
        colorBgHover: lighten(0.2, baseColor),
        colorBorder: darken(0.15, baseColor),
        colorBorderHover: darken(0.1, baseColor),
        colorHover: lighten(0.1, baseColor),
        colorText: baseColor,
        colorTextActive: darken(0.2, baseColor),
        colorTextHover: lighten(0.05, baseColor),
    };
};

export const rdTheme = {
    ...theme,
    getDesignToken: (config: RdThemeConfig): RdAliasToken => {
        // getDesignToken in antd
        const design = theme.getDesignToken(config);

        const secondaryColorGenerated = generateColor(config.token?.colorSecondary || '#1890ff');
        const tertiaryColorGenerated = generateColor(config.token?.colorTertiary || '#1890ff');
        const quaternaryColorGenerated = generateColor(config.token?.colorQuaternary || '#1890ff');

        const secondaryColorAdditional: ISecondaryColor = {
            colorSecondary: config.token?.colorSecondary || '#1890ff',
            colorSecondaryActive: secondaryColorGenerated.colorActive,
            colorSecondaryBg: secondaryColorGenerated.colorBg,
            colorSecondaryBgHover: secondaryColorGenerated.colorBgHover,
            colorSecondaryBorder: secondaryColorGenerated.colorBorder,
            colorSecondaryBorderHover: secondaryColorGenerated.colorBorderHover,
            colorSecondaryHover: secondaryColorGenerated.colorHover,
            colorSecondaryText: secondaryColorGenerated.colorText,
            colorSecondaryTextActive: secondaryColorGenerated.colorTextActive,
            colorSecondaryTextHover: secondaryColorGenerated.colorTextHover,
        };

        const tertiaryColorAdditional: ITertiaryColor = {
            colorTertiary: config.token?.colorTertiary || '#1890ff',
            colorTertiaryActive: tertiaryColorGenerated.colorActive,
            colorTertiaryBg: tertiaryColorGenerated.colorBg,
            colorTertiaryBgHover: tertiaryColorGenerated.colorBgHover,
            colorTertiaryBorder: tertiaryColorGenerated.colorBorder,
            colorTertiaryBorderHover: tertiaryColorGenerated.colorBorderHover,
            colorTertiaryHover: tertiaryColorGenerated.colorHover,
            colorTertiaryText: tertiaryColorGenerated.colorText,
            colorTertiaryTextActive: tertiaryColorGenerated.colorTextActive,
            colorTertiaryTextHover: tertiaryColorGenerated.colorTextHover,
        };

        const quaternaryColorAdditional: IQuaternaryColor = {
            colorQuaternary: config.token?.colorQuaternary || '#1890ff',
            colorQuaternaryActive: quaternaryColorGenerated.colorActive,
            colorQuaternaryBg: quaternaryColorGenerated.colorBg,
            colorQuaternaryBgHover: quaternaryColorGenerated.colorBgHover,
            colorQuaternaryBorder: quaternaryColorGenerated.colorBorder,
            colorQuaternaryBorderHover: quaternaryColorGenerated.colorBorderHover,
            colorQuaternaryHover: quaternaryColorGenerated.colorHover,
            colorQuaternaryText: quaternaryColorGenerated.colorText,
            colorQuaternaryTextActive: quaternaryColorGenerated.colorTextActive,
            colorQuaternaryTextHover: quaternaryColorGenerated.colorTextHover,
        };

        const result: RdAliasToken = {
            ...design,
            ...secondaryColorAdditional,
            ...tertiaryColorAdditional,
            ...quaternaryColorAdditional,
        };

        return result;
    },
};

export const rdTheme2 = theme;
