import { QuickTypeOption } from './types';

/**
 * Default quick type options used when `quickTypeOptions` is not provided.
 * Includes standard quick ranges, an "All" option, and a custom option.
 */
export const defaultQuickTypeOptions: QuickTypeOption[] = [
    { key: 'all', label: '[All]' },
    { key: 'today', label: 'Today' },
    { key: 'yesterday', label: 'Yesterday' },
    { key: 'thisWeek', label: 'This week' },
    { key: 'thisMonth', label: 'This month' },
    { key: 'lastMonth', label: 'Last month' },
    { key: 'thisYear', label: 'This year' },
    { key: 'custom', label: 'Custom' },
];
