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

export interface IAdditionalColor extends ISecondaryColor, ITertiaryColor, IQuaternaryColor {}
