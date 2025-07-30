import { getAliasToken, RdAliasToken } from '../..';
import { RdTypographyTextProps } from './types';

/**
 * Calculates the height in pixels of a Typography `Text` component
 * based on its `size` prop, using the corresponding `fontSize` and `lineHeight`
 * token values from the design token system.
 *
 * If an unknown size is provided, it will fallback to `'normal'` size
 * using the `fontSize` and `lineHeight` tokens.
 *
 * @param size - The `size` prop of the `Typography.Text` component. Possible values: `'normal'`, `'small'`.
 * @returns The calculated height in pixels (`fontSize * lineHeight`).
 *
 * @example
 * ```ts
 * const height = detectHeightBySize('small');
 * console.log(height); // e.g. 18 (depends on token values)
 * ```
 */
export const detectHeightBySize = (size: RdTypographyTextProps['size']) => {
    // Detect fontSize and lineHeight based on `size` prop
    let detectedFontSize: number | null = null;
    let detectedLineHeight: number | null = null;

    switch (size) {
        case 'normal':
            detectedFontSize = getAliasToken('Typography', 'fontSize') as RdAliasToken['fontSize'];
            detectedLineHeight = getAliasToken(
                'Typography',
                'lineHeight'
            ) as RdAliasToken['lineHeight'];
            break;

        case 'small':
            detectedFontSize = getAliasToken(
                'Typography',
                'fontSizeSM'
            ) as RdAliasToken['fontSizeSM'];
            detectedLineHeight = getAliasToken(
                'Typography',
                'lineHeightSM'
            ) as RdAliasToken['lineHeightSM'];
            break;

        default:
            // fallback to 'normal' size
            detectedFontSize = getAliasToken('Typography', 'fontSize') as RdAliasToken['fontSize'];
            detectedLineHeight = getAliasToken(
                'Typography',
                'lineHeight'
            ) as RdAliasToken['lineHeight'];
    }

    const detectedHeight = detectedFontSize * detectedLineHeight;

    return detectedHeight;
};
