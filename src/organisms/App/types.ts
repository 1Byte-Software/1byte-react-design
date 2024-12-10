import { OverrideTokenMap } from '@ant-design/cssinjs-utils';
import { ThemeConfig } from 'antd';
import { ArgsProps } from 'antd/es/notification';
import { MappingAlgorithm } from 'antd/es/theme/interface';
import { AliasToken } from 'antd/es/theme/internal';
import { RdComponentTokenMap } from '../../molecules/types';

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

/**
 * @description Custom Design Token.
 * @overload AliasToken (antd)
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

/**
 * @description Custom OverrideToken for RdAliasToken
 */
export type OverrideToken = OverrideTokenMap<RdComponentTokenMap, IRdAliasToken>;

/**
 * @description ComponentsConfig in antd
 */
export type ComponentsConfig = {
    [key in keyof OverrideToken]?: OverrideToken[key] & {
        algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
    };
};

export type RdComponentsConfig = ComponentsConfig & {};

export interface IRdThemeConfig extends ThemeConfig {
    /**
     * @desc Modify Design Token.
     * @override Partial<AliasToken> (antd)
     */
    token?: Partial<IRdAliasToken>;

    /**
     * @desc Modify Component Token and Alias Token applied to components.
     * @override ComponentsConfig (antd)
     */
    components?: RdComponentsConfig;
}

export interface IRdNotificationConfig {
    /**
     * @desc success notification config.
     */
    success?: Partial<ArgsProps>;

    /**
     * @desc error notification config.
     */
    error?: Partial<ArgsProps>;

    /**
     * @desc warning notification config.
     */
    warning?: Partial<ArgsProps>;

    /**
     * @desc info notification config.
     */
    info?: Partial<ArgsProps>;

    /**
     * @desc open notification config.
     */
    open?: Partial<ArgsProps>;
}
