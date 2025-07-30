import { getAliasToken } from '../..';
import { RdTypographyTitleProps } from './types';

/**
 * Calculates the visual height (in pixels) of a Typography Title component
 * based on its `level` prop, using the corresponding `fontSize` and `lineHeight`
 * token values from the theme (either component-specific or global).
 *
 * If an invalid level is provided (not from 1 to 5), it falls back to using
 * the level 1 (`fontSizeHeading1` and `lineHeightHeading1`) as default.
 *
 * @param level - The `level` prop of a `Typography.Title` component (typically from 1 to 5).
 * @returns The computed height in pixels (number), calculated as `fontSize * lineHeight`.
 *
 * @example
 * ```ts
 * const h1Height = detectHeightByLevel(1);
 * console.log(h1Height); // Example: 42 (depending on token values)
 *
 * const invalidHeight = detectHeightByLevel();
 * console.log(invalidHeight); // Fallbacks to heading1 height
 * ```
 */
export const detectHeightByLevel = (level: RdTypographyTitleProps['level']) => {
    // Detect fontSize and lineHeight based on `level` prop
    let detectedFontSize: number | null = null;
    let detectedLineHeight: number | null = null;

    switch (level) {
        case 1:
            detectedFontSize = getAliasToken('Typography', 'fontSizeHeading1') as number;
            detectedLineHeight = getAliasToken('Typography', 'lineHeightHeading1') as number;
            break;
        case 2:
            detectedFontSize = getAliasToken('Typography', 'fontSizeHeading2') as number;
            detectedLineHeight = getAliasToken('Typography', 'lineHeightHeading2') as number;
            break;
        case 3:
            detectedFontSize = getAliasToken('Typography', 'fontSizeHeading3') as number;
            detectedLineHeight = getAliasToken('Typography', 'lineHeightHeading3') as number;
            break;
        case 4:
            detectedFontSize = getAliasToken('Typography', 'fontSizeHeading4') as number;
            detectedLineHeight = getAliasToken('Typography', 'lineHeightHeading4') as number;
            break;
        case 5:
            detectedFontSize = getAliasToken('Typography', 'fontSizeHeading5') as number;
            detectedLineHeight = getAliasToken('Typography', 'lineHeightHeading5') as number;
            break;
        default:
            // fallback to level 1 if the level is invalid
            detectedFontSize = getAliasToken('Typography', 'fontSizeHeading1') as number;
            detectedLineHeight = getAliasToken('Typography', 'lineHeightHeading1') as number;
    }

    const detectedHeight = detectedFontSize * detectedLineHeight;

    return detectedHeight;
};
