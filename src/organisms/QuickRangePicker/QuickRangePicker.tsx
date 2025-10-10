import dayjs, { Dayjs } from 'dayjs';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { DatePicker, Dropdown, RdRangePickerProps, Select } from '../../molecules';
import { defaultQuickTypeOptions } from './constants';
import { QuickOptionType, QuickRangePickerProps } from './types';

/**
 * A reusable dropdown-based quick range picker component.
 * Inspired by Pagination's pageSizeOptions, it allows configurable quick date range selections
 * with an optional custom range picker. Supports controlled and uncontrolled modes via RdRangePickerProps.
 *
 * @example
 * <QuickRangePicker
 *   quickTypeOptions={[
 *     { key: 'today', label: 'Hôm nay', getRange: () => [dayjs().startOf('day'), dayjs().endOf('day')] },
 *     { key: 'custom', label: 'Tùy chỉnh' }
 *   ]}
 *   onChange={(dates, dateStrings) => console.log(dates, dateStrings)}
 * />
 *
 * @param props - Component props extending RdRangePickerProps.
 * @returns A React component rendering the quick range picker.
 */
export const QuickRangePicker: React.FC<QuickRangePickerProps> = props => {
    const {
        quickTypeOptions,
        defaultSelectedType = 'all',
        onChange,
        defaultValue,
        value,
        ...rangePickerProps
    } = props;

    const options = useMemo(() => quickTypeOptions || defaultQuickTypeOptions, [quickTypeOptions]);

    const [visible, setVisible] = useState(false);
    const [panelVisible, setPanelVisible] = useState(false);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [dates, setDates] = useState<Required<RdRangePickerProps['value']>>(null);

    // Fallback function to compute predefined date ranges based on option key
    const getDateRange = useCallback((type: string): [Dayjs, Dayjs] => {
        const now = dayjs();
        const t = type as QuickOptionType;
        switch (t) {
            case 'all':
                return [dayjs('1970-01-01'), dayjs('9999-12-31')];
            case 'today':
                return [now.startOf('day'), now.endOf('day')];
            case 'yesterday': {
                const y = now.subtract(1, 'day');
                return [y.startOf('day'), y.endOf('day')];
            }
            case 'thisWeek':
                return [now.startOf('week'), now.endOf('week')];
            case 'thisMonth':
                return [now.startOf('month'), now.endOf('month')];
            case 'lastMonth': {
                const last = now.subtract(1, 'month');
                return [last.startOf('month'), last.endOf('month')];
            }
            case 'thisYear':
                return [now.startOf('year'), now.endOf('year')];
            default:
                // Fallback to today if unknown key
                return [now.startOf('day'), now.endOf('day')];
        }
    }, []);

    // Get effective range for a given key, using option.getRange or fallback
    const getEffectiveRange = useCallback(
        (key: string): [Dayjs, Dayjs] => {
            const option = options.find(o => o.key === key);
            return option?.getRange ? option.getRange() : getDateRange(key);
        },
        [options, getDateRange]
    );

    // Detect the option type that matches the given date range
    const detectType = useCallback(
        (range: Required<RdRangePickerProps['value']>): string | null => {
            if (!range || range[0] == null || range[1] == null) return null;
            for (const option of options) {
                if (option.key === 'custom') continue;
                const optRange = getEffectiveRange(option.key);
                if (range[0]!.isSame(optRange[0]) && range[1]!.isSame(optRange[1])) {
                    return option.key;
                }
            }
            return null;
        },
        [options, getEffectiveRange]
    );

    // Initialize state based on defaultValue and defaultSelectedType
    const initialDates = useMemo<Required<RdRangePickerProps['value']>>(
        () => defaultValue || (defaultSelectedType ? getEffectiveRange(defaultSelectedType) : null),
        [defaultValue, defaultSelectedType, getEffectiveRange]
    );

    const initialSelectedType = useMemo(
        () =>
            defaultSelectedType ||
            detectType(initialDates) ||
            (initialDates && initialDates[0] != null && initialDates[1] != null ? 'custom' : null),
        [defaultSelectedType, initialDates, detectType]
    );

    // Set initial state
    useEffect(() => {
        setDates(initialDates);
        setSelectedType(initialSelectedType);
    }, []); // Empty deps: run once on mount

    // Sync with controlled value prop
    useEffect(() => {
        if (value !== undefined) {
            setDates(value);
            setSelectedType(
                value && value[0] != null && value[1] != null ? detectType(value) || 'custom' : null
            );
        }
    }, [value, detectType]);

    /**
     * Computes the format string for dateStrings based on Ant Design RangePicker behavior.
     * - Uses `format` prop if provided (handles string, object {format, type?}, array, or undefined).
     * - If `showTime` is true (boolean), appends 'HH:mm:ss' if no time in format.
     * - If `showTime` is object:
     *   - Uses `showTime.format` if provided.
     *   - Otherwise, builds time format from `showHour`, `showMinute`, `showSecond`, `showMillisecond`.
     * Mimics Ant Design's default formatting for onChange dateStrings.
     */
    const getFormat = useCallback((pickerProps: RdRangePickerProps): string => {
        let fmt: string;

        // Handle format prop: string, object {format, type?}, array, or undefined
        const rawFormat = pickerProps.format;
        if (typeof rawFormat === 'string') {
            fmt = rawFormat;
        } else if (rawFormat && typeof rawFormat === 'object' && 'format' in rawFormat) {
            fmt = (rawFormat as { format: string }).format;
        } else if (Array.isArray(rawFormat) && rawFormat.length > 0) {
            // Take first format if array
            const first = rawFormat[0];
            if (typeof first === 'string') {
                fmt = first;
            } else if (first && typeof first === 'object' && 'format' in first) {
                fmt = (first as { format: string }).format || 'YYYY-MM-DD';
            } else {
                fmt = 'YYYY-MM-DD';
            }
        } else {
            fmt = 'YYYY-MM-DD';
        }

        const showTime = pickerProps.showTime;
        if (showTime) {
            let timeFormat = '';
            if (typeof showTime === 'boolean') {
                timeFormat = 'HH:mm:ss';
            } else {
                timeFormat = showTime.format || '';
                if (!timeFormat) {
                    const {
                        showHour = true,
                        showMinute = true,
                        showSecond = true,
                        showMillisecond = false, // Assuming default false, as not standard in AntD
                    } = showTime;
                    const parts: string[] = [];
                    if (showHour) parts.push('HH');
                    if (showMinute) parts.push('mm');
                    if (showSecond) parts.push('ss');
                    if (showMillisecond) parts.push('SSS');
                    timeFormat = parts.join(':');
                }
            }

            // Append time format if base format doesn't already include time components
            if (!/\bHH|mm|ss|SSS\b/.test(fmt)) {
                if (timeFormat) {
                    fmt += ` ${timeFormat}`;
                }
            }
        }

        return fmt;
    }, []);

    // Handle quick option selection (excludes custom)
    const handleQuickSelect = useCallback(
        (key: string) => {
            const range = getEffectiveRange(key);
            const fmt = getFormat(rangePickerProps);
            const dateStrings: [string, string] = [range[0].format(fmt), range[1].format(fmt)];
            setSelectedType(key);
            setDates(range);
            onChange?.(range as [Dayjs, Dayjs], dateStrings);
            setVisible(false);
        },
        [getEffectiveRange, onChange, getFormat, rangePickerProps]
    );

    // Handle custom range picker change
    const handleCustomChange = useCallback<NonNullable<RdRangePickerProps['onChange']>>(
        (dates, dateStrings) => {
            setDates(dates);
            if (dates?.[0] && dates?.[1]) {
                setSelectedType('custom');
                onChange?.(dates as [Dayjs, Dayjs], dateStrings);
            } else {
                setDates(null);
                setSelectedType(null);
                onChange?.(null, dateStrings);
            }
            setVisible(false);
            setPanelVisible(false);
        },
        [onChange]
    );

    // Generate display label based on selected type and dates
    const displayLabel = useMemo(() => {
        if (!selectedType) {
            return 'Select range';
        }

        if (selectedType !== 'custom') {
            const option = options.find(o => o.key === selectedType);
            return option?.label ?? selectedType;
        }

        // Custom case
        if (dates && dates[0] != null && dates[1] != null) {
            const [start, end] = dates as [Dayjs, Dayjs];
            return `${start.format('YYYY-MM-DD')} ~ ${end.format('YYYY-MM-DD')}`;
        }

        const option = options.find(o => o.key === selectedType);
        return option?.label ?? 'Custom range';
    }, [selectedType, dates, options]);

    // Generate menu items from options
    const menuItems = useMemo(() => {
        return options.map(option => {
            const { key, label } = option;

            if (key === 'custom') {
                return {
                    key,
                    label: (
                        <div
                            style={{ position: 'relative', overflow: 'hidden' }}
                            onClick={e => {
                                e.stopPropagation();
                                setPanelVisible(true);
                            }}
                        >
                            <div>Customize</div>
                            <div
                                onClick={e => {
                                    e.stopPropagation();
                                }}
                            >
                                <DatePicker.RangePicker
                                    open={panelVisible}
                                    styles={{
                                        root: {
                                            pointerEvents: 'none',
                                            opacity: 0,
                                            position: 'absolute',
                                            bottom: 0, // RangePicker use this style
                                            insetInlineStart: 0,
                                        },
                                    }}
                                    onChange={(ranges, rangesStrings) => {
                                        if (ranges?.[0] && ranges?.[1]) {
                                            setDates([ranges[0], ranges[1]]);
                                        } else {
                                            setDates(null);
                                        }
                                        setVisible(false);
                                        setPanelVisible(false);
                                        handleCustomChange(ranges, rangesStrings);
                                    }}
                                    // value={dates}
                                    {...rangePickerProps}
                                />
                            </div>
                        </div>
                    ),
                };
            }

            return {
                key,
                label,
                onClick: () => handleQuickSelect(key),
            };
        });
    }, [options, handleQuickSelect, panelVisible, handleCustomChange, dates, rangePickerProps]);

    // Handle dropdown open/close
    const handleOpenChange = useCallback((open: boolean) => {
        setVisible(open);
        if (!open) {
            setPanelVisible(false);
        }
    }, []);

    console.debug('displayLabel', displayLabel);

    return (
        <Dropdown
            arrow
            open={visible}
            trigger={['click']}
            destroyOnHidden
            onOpenChange={handleOpenChange}
            menu={{ items: menuItems }}
        >
            <Select open={false} value={displayLabel} style={{ minWidth: 200 }} />
        </Dropdown>
    );
};
