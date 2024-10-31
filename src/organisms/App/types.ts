import { ThemeConfig } from 'antd';
import { AliasToken } from 'antd/es/theme/internal';

export interface ISecondaryColor {
    colorSecondary: string;
    colorSecondaryActive: string;
    colorSecondaryBg: string;
    colorSecondaryBgHover: string;
    colorSecondaryBorder: string;
    colorSecondaryBorderHover: string;
    colorSecondaryHover: string;
    colorSecondaryText: string;
    colorSecondaryTextActive: string;
    colorSecondaryTextHover: string;
}

export interface ITertiaryColor {
    colorTertiary: string;
    colorTertiaryActive: string;
    colorTertiaryBg: string;
    colorTertiaryBgHover: string;
    colorTertiaryBorder: string;
    colorTertiaryBorderHover: string;
    colorTertiaryHover: string;
    colorTertiaryText: string;
    colorTertiaryTextActive: string;
    colorTertiaryTextHover: string;
}

export interface IQuaternaryColor {
    colorQuaternary: string;
    colorQuaternaryActive: string;
    colorQuaternaryBg: string;
    colorQuaternaryBgHover: string;
    colorQuaternaryBorder: string;
    colorQuaternaryBorderHover: string;
    colorQuaternaryHover: string;
    colorQuaternaryText: string;
    colorQuaternaryTextActive: string;
    colorQuaternaryTextHover: string;
}

interface IAdditionalColor extends ISecondaryColor, ITertiaryColor, IQuaternaryColor {}

// VardyDesign
/**
 * @description SeedToken
 */
export interface IRdAliasToken extends AliasToken, IAdditionalColor {
    /**
     * @desc Brand secondary color is one of the most direct visual elements to reflect the characteristics and communication of the product. After you have selected the brand color, we will automatically generate a complete color palette and assign it effective design semantics.
     */
    colorSecondary: string;

    /**
     * @desc Brand tertiary color is one of the most direct visual elements to reflect the characteristics and communication of the product. After you have selected the brand color, we will automatically generate a complete color palette and assign it effective design semantics.
     */
    colorTertiary: string;

    /**
     * @desc Brand quaternary color is one of the most direct visual elements to reflect the characteristics and communication of the product. After you have selected the brand color, we will automatically generate a complete color palette and assign it effective design semantics.
     */
    colorQuaternary: string;
}

export interface IRdThemeConfig extends ThemeConfig {
    /**
     * @desc Modify Design Token.
     * @override Partial<AliasToken>
     */
    token?: Partial<IRdAliasToken>;
}
