// utils/localize.ts

/**
 * Localize template string by replacing {{variables}} with values from context.
 * Supports nested keys (e.g. {{user.name}}) and fallback (e.g. {{key|default}}).
 *
 * Example:
 *  localize("Hi {{user.name|there}}!", { user: { name: "Kenneth" } })
 *  -> "Hi Kenneth!"
 */
export function localize(
    template: string,
    context: Record<string, any> = {},
    options?: { strict?: boolean }
): string {
    if (typeof template !== 'string') return template as any;

    const getValue = (path: string, ctx: any): any => {
        return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), ctx);
    };

    return template.replace(/\{\{(.*?)\}\}/g, (_, match) => {
        const [path, fallback] = match.split('|').map((s: string) => s.trim());
        const value = getValue(path, context);

        if (value !== undefined && value !== null) return String(value);

        if (fallback !== undefined) return fallback;
        if (options?.strict) throw new Error(`Missing localization key: ${path}`);
        return '';
    });
}
