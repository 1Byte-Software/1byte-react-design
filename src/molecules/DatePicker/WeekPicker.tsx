import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { WeekPickerStyles } from './styles';
import { RdWeekPickerProps } from './types';

export const WeekPicker = ({ ...antdProps }: RdWeekPickerProps) => {
    return (
        <ConfigProviderDesign>
            <WeekPickerStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
