import { LineConfig } from '@ant-design/plots';
import { formatDate } from '../../utils/datetime';
import { Empty } from '../Empty';
import { LineChartWrapper } from './styles';
import { LineChartProps } from './types';

export const LineChart: React.FC<LineChartProps> = props => {
    const { data, valueLabel = 'value' } = props;

    if (!data?.length) return <Empty />;

    const lineProps: LineConfig = {
        data,
        xField: 'date' as keyof LineChartProps['data'][0],
        yField: 'value' as keyof LineChartProps['data'][0],
        point: {
            shapeField: 'square',
            sizeField: 4,
        },
        interaction: {
            tooltip: {
                marker: false,
            },
        },
        style: {
            lineWidth: 2,
        },
        tooltip: {
            title: ({ date }) => {
                return formatDate(date);
            },
            items: [
                {
                    channel: 'y',
                    name: valueLabel,
                },
            ],
        },
    };

    return <LineChartWrapper {...lineProps} />;
};
