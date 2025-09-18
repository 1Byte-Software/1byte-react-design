import { ArrowUpOutlined, Typography } from '../..';
import { StatisticWrapper, SummaryCardWrapper } from './styles';
import TotalLineChart from './TotalLineChart';
import { RdSummaryCardProps } from './types';

export const SummaryCard: React.FC<RdSummaryCardProps> = props => {
    const {
        title,
        value,
        statistic,
        icon,
        chart = null,

        trend,

        children,
        ...cardProps
    } = props;

    const { changePercent, isPositive = true } = trend || {};
    const { data: chartData = [], color } = chart || {};

    return (
        <SummaryCardWrapper {...cardProps}>
            <StatisticWrapper
                title={title}
                value={value}
                prefix={icon}
                {...statistic}
                suffix={
                    trend && (
                        <Typography.Text type={isPositive ? 'success' : 'danger'}>
                            <ArrowUpOutlined /> {changePercent}%
                        </Typography.Text>
                    )
                }
            />

            {chart && (
                <div style={{ height: 64 }}>
                    <TotalLineChart color={color} data={chartData} />
                </div>
            )}

            {children}
        </SummaryCardWrapper>
    );
};
