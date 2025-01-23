import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { WeekPickerStyles } from './styles';
import { RdWeekPickerProps } from './types';

export const WeekPicker = (props: RdWeekPickerProps) => {
    return (
        <ConfigProviderDesign>
            <WeekPickerStyles {...props} />
        </ConfigProviderDesign>
    );
};
