import { forwardRef } from 'react';
import { StatisticStyled } from './styles';
import { Timer } from './Timer';
import { RdStatisticComponent, RdStatisticCompoundedComponent } from './types';

export const InternalStatistic: RdStatisticComponent = forwardRef((props, ref) => {
    return <StatisticStyled {...props} ref={ref} />;
});

export const Statistic: RdStatisticCompoundedComponent =
    InternalStatistic as RdStatisticCompoundedComponent;

Statistic.Timer = Timer;
