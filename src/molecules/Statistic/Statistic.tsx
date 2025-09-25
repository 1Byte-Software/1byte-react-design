import { forwardRef } from 'react';
import { StatisticStyles } from './styles';
import { Timer } from './Timer';
import { RdStatisticComponent, RdStatisticCompoundedComponent } from './types';

export const InternalStatistic: RdStatisticComponent = forwardRef((props, ref) => {
    return <StatisticStyles {...props} ref={ref} />;
});

export const Statistic: RdStatisticCompoundedComponent =
    InternalStatistic as RdStatisticCompoundedComponent;

Statistic.Timer = Timer;
