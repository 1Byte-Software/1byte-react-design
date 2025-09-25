import { TimerStyles } from './styles';
import { RdTimerComponent } from './types';

export const Timer: RdTimerComponent = props => {
    return <TimerStyles {...props} />;
};
