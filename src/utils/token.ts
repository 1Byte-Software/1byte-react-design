import { config } from '..';
import { IRdAliasToken, IRdComponentsConfig } from '../organisms';

/**
 * Get the token value for a given component and alias name.
 * It checks for the component-specific token first, then the design token if the component token is not found.
 *
 * @param componentName - The name of the component to fetch its token.
 * @param aliasName - The alias name of the token to fetch.
 * @returns The token value for the component or alias, or `undefined` if not found.
 */
export const getComponentOrGlobalToken = (
    componentName: keyof IRdComponentsConfig,
    aliasName: keyof IRdAliasToken
) => {
    const componentTokenValue = config.componentToken?.[componentName]?.[aliasName];
    const designTokenValue = config.designToken?.[aliasName];

    return componentTokenValue !== undefined ? componentTokenValue : designTokenValue;
};
