import { useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import * as Yup from 'yup';
import { objectToURLSearchParams } from './useFilter.helper';
import { IUseFilterProps } from './useFilter.types';

/**
 * A React hook for managing filter state with Yup schema validation.
 *
 * Supports two modes of operation:
 * 1. **URL-based filter**: Keeps filter state in sync with `URLSearchParams`
 * 2. **Local state filter**: Keeps filter state in React state without touching the URL
 *
 * Features:
 * - Converts all schema fields to `notRequired` for flexible validation
 * - Supports default values from both `props.defaultValue` and `schema.getDefault()`
 * - Can strip unknown keys during validation to prevent invalid fields
 *
 * @typeParam T - The shape of the filter object, derived from the Yup schema
 *
 * @example
 * ```ts
 * const schema = Yup.object({
 *   search: Yup.string(),
 *   category: Yup.string().required(),
 * });
 *
 * const { value, onChange } = useFilter({
 *   schema,
 *   defaultValue: { search: '', category: 'all' },
 *   config: { useSearchParams: true }
 * });
 *
 * onChange({ search: 'keyword' });
 * ```
 */
export const useFilter = <T extends NonNullable<unknown>>(props: IUseFilterProps<T>) => {
    const { schema, defaultValue, config } = props;
    const { stripUnknown = true, useSearchParams: enableSearchParams = true } = config || {};

    // If `useSearchParams` mode is enabled, initialize state from the URL
    const [searchParams, setSearchParams] = useSearchParams(
        objectToURLSearchParams(defaultValue || {})
    );

    // Local state fallback (if URL sync is disabled)
    const [filterState, setFilterState] = useState<T>(defaultValue || (schema.getDefault() as T));

    // Create a "loose" version of the schema where all fields are optional
    const looseSchema = useMemo(() => {
        const newShape: Record<string, Yup.AnySchema> = {};

        for (const key in schema.fields) {
            const field = schema.fields[key];
            if (Yup.isSchema(field)) {
                newShape[key] = (field as Yup.AnySchema).notRequired();
            }
        }

        return Yup.object(newShape) as Yup.ObjectSchema<T>;
    }, [schema]);

    // Compute the validated filter value from either URL params or local state
    const filterValue = useMemo(() => {
        try {
            const raw = enableSearchParams ? Object.fromEntries(searchParams) : filterState;

            return looseSchema.validateSync(raw, { stripUnknown }) as Yup.InferType<typeof schema>;
        } catch (e) {
            console.debug('e', e);
            return schema.getDefault() as Yup.InferType<typeof schema>;
        }
    }, [searchParams, filterState, schema, stripUnknown, enableSearchParams, looseSchema]);

    // Change handler for updating filter state
    const handleChangeFilter = useCallback(
        (filterValue: Partial<T>) => {
            if (enableSearchParams) {
                const filterValueWithoutNull = Object.entries<any>(filterValue).filter(
                    ([_, value]) => value !== null
                );
                setSearchParams(new URLSearchParams(filterValueWithoutNull));
            } else {
                setFilterState(prev => ({
                    ...prev,
                    ...filterValue,
                }));
            }
        },
        [enableSearchParams, setSearchParams]
    );

    return {
        /** The current validated filter value */
        value: filterValue,

        /** Updates the filter state or URL search params */
        onChange: handleChangeFilter,
    };
};
