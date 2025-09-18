export interface TotalLineChartProps {
    color?: string;
    data: ChartDataItem[];
}

export interface ChartDataItem {
    value: number;
    date: string;
}
