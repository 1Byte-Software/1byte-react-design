import { ReactNode } from 'react';
import { RdCardProps } from '../../molecules';

export interface SummaryCardProps extends RdCardProps {
    /**
     * Determines the display format of values.
     *
     * - `"number"` → renders plain number format.
     * - `"currency"` → renders values as currency.
     *
     * @default "number"
     */
    format?: 'number' | 'currency';

    /**
     * The main numeric value to display.
     * Usually represents the total amount or main KPI.
     */
    value: ReactNode;

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
