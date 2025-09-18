import { ReactNode } from 'react';
import { RdCardProps } from '../../molecules';
import { StatisticProps } from 'antd';
import { ChartDataItem } from './TotalLineChart/types';

export interface RdSummaryCardProps extends Omit<RdCardProps, 'title'> {
    title: StatisticProps['title'];

    /**
     * The main numeric value to display.
     * Usually represents the total amount or main KPI.
     */
    value: StatisticProps['value'];

    trend?: {
        isPositive?: boolean;
        changePercent: number;
    };

    statistic?: Omit<StatisticProps, 'title' | 'value'>;

    icon?: StatisticProps['prefix'];

    /**
     * Determines the display format of values.
     *
     * - `"number"` → renders plain number format.
     * - `"currency"` → renders values as currency.
     *
     * @default "number"
     */
    format?: 'number' | 'currency';

    chart?: {
        data: ChartDataItem[];
        color?: string;
    };

    /**
     * The secondary numeric value to display.
     * Typically represents today's or a breakdown value.
     */
    subValue?: ReactNode;

    /**
     * Label displayed above the main value.
     *
     * @default "Total"
     */
    label?: string;

    /**
     * Label displayed next to the sub value.
     *
     * @default "Today total"
     */
    subLabel?: string;
}
