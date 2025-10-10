import { Dayjs } from 'dayjs';
import { ReactNode } from 'react';
import { RdRangePickerProps } from '../../molecules';

/**
 * Union type for predefined quick option keys.
 * Users can extend this with custom string keys for flexibility.
 */
export type QuickOptionType =
    | 'all'
    | 'today'
    | 'yesterday'
    | 'thisWeek'
    | 'thisMonth'
    | 'lastMonth'
    | 'thisYear'
    | 'custom';

/**
 * Interface for a single quick type option.
 * - `key`: Unique identifier for the option, matching QuickOptionType or custom string.
 * - `label`: Display label for the option.
 * - `getRange`: Optional function to compute the date range dynamically when selected.
 *   If not provided, falls back to predefined ranges based on `key`.
 */
export interface QuickTypeOption {
    key: QuickOptionType | string;
    label: ReactNode;
    getRange?: () => [Dayjs, Dayjs];
}

/**
 * Props for the QuickRangePicker component.
 * Extends RdRangePickerProps to inherit all RangePicker properties.
 * - `quickTypeOptions`: Array of options to display in the dropdown.
 *   If not provided, uses `defaultQuickTypeOptions`.
 * - `defaultSelectedType`: Initial selected option key. Defaults to 'today'.
 */
export interface QuickRangePickerProps extends RdRangePickerProps {
    quickTypeOptions?: QuickTypeOption[];
    defaultSelectedType?: QuickOptionType;
}
