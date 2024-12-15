import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TimePickerStyles } from './styles';
import { RdTimePickerProps } from './types';

export const TimePicker = ({ ...antdProps }: RdTimePickerProps) => {
    return (
        <ConfigProviderDesign>
            <TimePickerStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
