import { getAliasToken, RdAliasToken } from '../..';
import { RdTypographyTextProps } from './types';

/**
 * Calculates the height in pixels of a Typography `Link` component
 * using the corresponding `fontSize` and `lineHeight`
 * token values from the design token system.
 *
 * @returns The calculated height in pixels (`fontSize * lineHeight`).
 *
 * @example
 * ```ts
 * const height = getHeight();
 * console.log(height); // e.g. 18 (depends on token values)
 * ```
 */
export const getHeight = () => {
    const detectedFontSize = getAliasToken('Typography', 'fontSize') as RdAliasToken['fontSize'];
    const detectedLineHeight = getAliasToken(
        'Typography',
        'lineHeight'
    ) as RdAliasToken['lineHeight'];

    const detectedHeight = detectedFontSize * detectedLineHeight;

    return detectedHeight;
};
