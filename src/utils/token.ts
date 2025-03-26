import { config, RdAliasToken, RdComponentsConfig, RdComponentTokenMap } from '..';

/**
 * Get the token value for a given component and alias name.
 * It checks for the component-specific token first, then the design token if the component token is not found.
 *
 * @param componentName - The name of the component to fetch its token.
 * @param aliasName - The alias name of the token to fetch.
 * @returns The token value for the component or alias, or `undefined` if not found.
 */
export const getComponentOrGlobalToken = (
    componentName: keyof RdComponentsConfig,
    aliasName: keyof RdAliasToken
) => {
    const componentTokenValue = config.componentToken?.[componentName]?.[aliasName];
    const designTokenValue = config.designToken?.[aliasName];

    return componentTokenValue !== undefined ? componentTokenValue : designTokenValue;
};

export const getComponentToken = <
    ComponentName extends keyof RdComponentTokenMap,
    ComponentToken extends keyof NonNullable<RdComponentTokenMap[ComponentName]>
>(
    componentName: ComponentName,
    componentToken: ComponentToken
): NonNullable<RdComponentTokenMap[ComponentName]>[ComponentToken] | undefined => {
    return (config.componentToken?.[componentName] as RdComponentTokenMap[ComponentName])?.[
        componentToken
    ];
};
