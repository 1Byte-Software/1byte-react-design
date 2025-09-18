import { Typography } from '../..';
import { Space } from '../../molecules';
import { SummaryCardWrapper } from './styles';
import { RdSummaryCardProps } from './types';

export const SummaryCard: React.FC<RdSummaryCardProps> = props => {
    const {
        format = 'number',
        value,
        subValue = null,
        label = 'Total',
        subLabel = null,
        ...cardProps
    } = props;

    return (
        <SummaryCardWrapper {...cardProps}>
            <Space direction="vertical" block size={0}>
                <Typography.Text strong type="secondary">
                    {label}
                </Typography.Text>
                <Space align="baseline">
                    <Typography.Title level={1} disableMargin>
                        {value}
                    </Typography.Title>
                </Space>

                {(subLabel || subValue) && (
                    <Space>
                        {subLabel && (
                            <Typography.Text strong type="secondary">
                                {subLabel}
                            </Typography.Text>
                        )}
                        {subValue && <Typography.Text strong>{subValue}</Typography.Text>}
                    </Space>
                )}
            </Space>
        </SummaryCardWrapper>
    );
};
