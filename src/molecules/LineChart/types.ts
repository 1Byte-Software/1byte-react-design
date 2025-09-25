import { Line } from '@ant-design/plots/es/core/plots/line';
import { GetProps } from 'antd';

export interface LineDataItem {
    date: Date | string;
    value: number;
}

type LineChartPropsAntd = GetProps<Line>;

export interface LineChartProps extends Partial<LineChartPropsAntd> {
    data: LineDataItem[];
    valueLabel?: string;
}
