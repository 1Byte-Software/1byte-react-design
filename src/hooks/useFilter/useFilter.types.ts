import * as Yup from 'yup';

interface IFilterConfig {
    /**
     * Removes keys from the object that are not defined in the Yup schema during validation.
     * Helps prevent “junk” data from entering the filter state or the URL.
     *
     * @defaultValue true
     */
    stripUnknown?: boolean;

    /**
     * Whether to sync the filter state with `URLSearchParams`.
     * - If `true`: Any filter changes will be reflected in the URL.
     * - If `false`: The filter will only exist in local state without affecting the URL.
     *
     * @defaultValue true
     */
    useSearchParams?: boolean;
}

export interface IUseFilterProps<T extends {}> {
    /**
     * Yup schema that defines the structure and validation rules for the filter.
     * Used to parse data from the URL or local state, and to create default values
     * when no data is provided.
     */
    schema: Yup.ObjectSchema<T>;

    /**
     * Initial default value for the filter.
     * If not provided, the hook will use `schema.getDefault()` to generate it.
     */
    defaultValue?: T;

    /**
     * Optional configuration for the hook.
     * - `stripUnknown`: Removes fields that are not defined in the schema when validating (default: true)
     * - `useSearchParams`: Syncs the filter with `URLSearchParams` (default: true)
     */
    config?: IFilterConfig;
}
