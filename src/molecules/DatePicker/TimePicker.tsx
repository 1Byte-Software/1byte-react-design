import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TimePickerStyles } from './styles';
import { RdTimePickerProps } from './types';

export const TimePicker = (props: RdTimePickerProps) => {
    return (
        <ConfigProviderDesign>
            <TimePickerStyles {...props} />
        </ConfigProviderDesign>
    );
};
