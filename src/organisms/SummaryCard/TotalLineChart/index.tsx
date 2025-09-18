import { Tiny } from '@ant-design/plots';
import { config } from '../../..';
import { TotalLineChartProps } from './types';

const TotalLineChart: React.FC<TotalLineChartProps> = props => {
    const { color = config.designToken.colorPrimary, data } = props;

    const configChart = {
        data,
        shapeField: 'smooth',
        xField: 'date',
        yField: 'value',
        style: {
            fill: `linear-gradient(-90deg, white 0%, ${color} 100%)`,
            fillOpacity: 0.6,
        },
    };

    return (
        <Tiny.Area
            {...configChart}
            tooltip={{
                name: 'Total',
                color: color,
                channel: 'Total',
                field: 'value',
                value: 'Total',
                title: d => {
                    return d.date;
                },
                valueFormatter: (d: number) => d,
            }}
        />
    );
};

export default TotalLineChart;
